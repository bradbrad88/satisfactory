import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Head>
        <title>Satisfactory Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full">
        <h1>Satisfactory Planner</h1>
      </main>
    </div>
  );
};

export default Home;
