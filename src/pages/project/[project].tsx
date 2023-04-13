import { useRouter } from "next/router";
import React from "react";

export default function Project() {
  const router = useRouter();
  const { project } = router.query;

  return <div className="pt-96">{project}</div>;
}
