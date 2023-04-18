import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageWrapper } from "@/components/layout";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

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
  const [ref, inView] = useInView({ threshold: 0.2 });
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
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / (1000 * 60));

    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else {
      const diffHrs = Math.round(diffMs / (1000 * 60 * 60));
      return `${diffHrs} hr ago`;
    }
  }

  const fetchGithubData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/balthazarely/events?per_page=6`,
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
              <div> recenty github activity </div>
            </motion.div>
            <motion.div
              variants={sectionContainer}
              initial="hidden"
              ref={ref}
              animate={animation}
              className="mx-auto  grid w-full  grid-cols-1 gap-2 sm:grid-cols-2 "
            >
              {recentPushes?.map((push: any) => {
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
