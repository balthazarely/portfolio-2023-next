import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageWrapper } from "@/components/layout";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { log } from "console";

const sectionContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.15,
      duration: 1,
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const singleCard = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.35,
      staggerChildren: 0.1,
    },
  },
};

export function GihubActivity() {
  const [recentPushes, setRecentPushes] = useState<any>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const threshold = isMobile ? 0.1 : 0.2;
  const [ref, inView] = useInView({ threshold: threshold });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  useEffect(() => {
    fetchGithubData();
  }, []);

  function getTimeAgo(dateString: string) {
    const MS_IN_MIN = 60 * 1000;
    const MS_IN_HR = MS_IN_MIN * 60;
    const MS_IN_DAY = MS_IN_HR * 24;

    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    if (diffMs < MS_IN_MIN) {
      const diffSecs = Math.round(diffMs / 1000);
      return `${diffSecs} ${diffSecs === 1 ? "sec" : "secs"} ago`;
    } else if (diffMs < MS_IN_HR) {
      const diffMins = Math.round(diffMs / MS_IN_MIN);
      return `${diffMins} ${diffMins === 1 ? "min" : "mins"} ago`;
    } else if (diffMs < MS_IN_DAY) {
      const diffHrs = Math.round(diffMs / MS_IN_HR);
      return `${diffHrs} ${diffHrs === 1 ? "hr" : "hrs"} ago`;
    } else {
      const diffDays = Math.round(diffMs / MS_IN_DAY);
      return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
    }
  }

  const fetchGithubData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/balthazarely/events?per_page=30`,
        {
          headers: {
            Authorization: `Token ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
          },
        }
      );
      const data = await response.json();
      const pushData = data
        .filter((data: any) => data.type === "PushEvent")
        .map((data: any) => {
          return {
            id: data.id,
            type: data.type,
            commitMsg: data.payload.commits[0].message,
            url: data.payload.commits[0].url,
            time: new Date(data.created_at).toLocaleString(),
            timeSince: getTimeAgo(data.created_at),
            repo: data.repo.name,
            repoUrl: data.repo.url,
          };
        });
      console.log(data);

      setRecentPushes(pushData);
    } catch (error) {}
  };

  return (
    <>
      {recentPushes ? (
        <div className="bg-primary">
          <PageWrapper className=" py-8 ">
            <motion.div
              variants={sectionContainer}
              initial="hidden"
              ref={ref}
              animate={animation}
              className="mb-4 flex items-center justify-center gap-2 text-center font-bold text-white"
            >
              <div> recenty github commits </div>
            </motion.div>
            <motion.div
              variants={sectionContainer}
              initial="hidden"
              ref={ref}
              animate={animation}
              className="mx-auto  grid w-full  grid-cols-1 gap-2 sm:grid-cols-2 "
            >
              {recentPushes?.slice(0, 6).map((push: any) => {
                return (
                  <motion.div
                    variants={singleCard}
                    key={push.id}
                    className="mx-auto flex w-full flex-row items-center gap-4 rounded-lg  bg-base-100 p-2 shadow-md"
                  >
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex h-4 w-full justify-between">
                        <div className="flex gap-1 overflow-hidden">
                          <RiGitRepositoryCommitsLine className="w-7 text-xl" />
                          <h2 className="truncate text-xs font-semibold">
                            {push.commitMsg}
                          </h2>
                        </div>
                        <p className="w-20  text-right text-xs opacity-60">
                          {push.timeSince}
                        </p>
                      </div>
                      <a
                        href={`https://github.com/${push.repo}`}
                        target="_BLANK"
                      >
                        <p className="text-xs text-primary">{push.repo}</p>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </PageWrapper>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
