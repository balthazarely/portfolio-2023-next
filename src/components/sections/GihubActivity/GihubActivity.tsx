import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageWrapper } from "@/components/layout";

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
  const [recentPushes, setRecentPushes] = useState([]);
  const [userProfile, setUserProfile] = useState<any>();

  const [ref, inView, entry] = useInView({ threshold: 0.2 });
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
    const diffHrs = Math.round(diffMs / (1000 * 60 * 60));
    return `${diffHrs} hr ago`;
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
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="bg-primary">
      <PageWrapper className=" py-8 ">
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          ref={ref}
          animate={animation}
          className="mb-4 w-full text-center font-bold text-white"
        >
          recenty github activity
        </motion.div>
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          ref={ref}
          animate={animation}
          className="mx-auto  grid w-full  grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3"
        >
          {recentPushes?.map((push: any) => {
            return (
              <motion.div
                variants={singleCard}
                key={push.id}
                className="mx-auto flex w-full flex-row items-center gap-4 rounded-lg  bg-base-100 p-2 shadow-md"
              >
                {/* <img
                  className="h-8 w-8 rounded-full"
                  src={userProfile?.avatar_url}
                  alt="profile pic"
                /> */}
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full justify-between">
                    <h2 className="text-xs font-semibold">{push.commitMsg}</h2>
                    <p className="text-xs opacity-60">{push.timeSince}</p>
                  </div>
                  <a href={`https://github.com/${push.repo}`} target="_BLANK">
                    <p className="text-xs text-primary">{push.repo}</p>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </PageWrapper>
    </div>
  );
}
