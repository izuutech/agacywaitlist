import Head from "next/head";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import About from "../components/About";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { wakeServer } from "../services/endpoints";

export default function Home() {
  useEffect(() => {
    const wakeBackend = async () => {
      const res = await wakeServer();
    };
    wakeBackend();
  }, []);
  return (
    <div>
      <Head>
        <title>Agacy Inc</title>
        <meta
          name="description"
          content="Your One Stop Online Purchase Solution. Get all you want in one place"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <img
        src="/ellipse.png"
        className="absolute right-0 w-2/4 aspect-auto z-[-1]"
      />

      <header className="w-[90%] ml-[5%] pt-8 mb-8 flex flex-row justify-between items-center">
        <Link href="/" className="w-52">
          <img src="/logo.png" className="w-[70%] aspect-auto" />
        </Link>
        <div className="hidden sm:flex justify-between sm:w-[50%] md:w-[30%]">
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
        <div className="sm:hidden flex justify-between sm:w-[50%] md:w-[30%]">
          <GiHamburgerMenu />
        </div>
      </header>
      <main className="w-[90%] ml-[5%]">
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="text-white text-2xl bg-[#1C9BF1] w-4/5 md:w-3/4 py-2 px-4">
              Your One Stop Online
            </div>
            <div className="text-black text-2xl font-bold w-full md:w-3/4 py-2">
              Purchase Solution
            </div>
            <div className="text-black text-lg font-bold w-full mt-4 md:w-2/4 py-2">
              Get all you want in one place
            </div>
            <div className="w-full md:w-3/5 py-2">
              We provide 3 in 1 solution to your online retail and wholesale
              purchases as well as handymen services.
            </div>
          </div>
          <div className="h-48 md:h-full flex justify-center">
            <img src="/agacyPhone.png" className="h-full aspect-auto" />
          </div>
        </div>
        <About />
        <Features />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
