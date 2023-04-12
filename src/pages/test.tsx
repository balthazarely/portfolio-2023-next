import { ProjectsNew } from "@/components/sections";
import Head from "next/head";
import React, { useState } from "react";
import List from "./list";
import Modal from "./modal";

export default function Test() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Head>
        <title>Shared Transition Animation</title>
        <meta name="description" content="Shared Transition Animation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
}
