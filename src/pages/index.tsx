import Image from "next/image";
import Head from "next/head";
import HomePage from "@/components/homepage";


export default function Home() {
  return (
    <>
      <Head>
        <title>Code Savant</title>
      </Head>
      <main className={` flex flex-col items-center justify-center w-full`}>
        <p>This is the main page</p>
        <HomePage/>
      </main>
    </>
  );
}
