import Head from "next/head";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Info from "../components/Info";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Slider />
      <Info />
    </>
  );
}
