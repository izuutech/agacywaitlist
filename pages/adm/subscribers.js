import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchList } from "../../services/endpoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subscribers({ data }) {
  const [subscribers, setSubscribers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await fetchList();
      if (res.status === 200) {
        setSubscribers([...res.data.data]);
      } else {
        setSubscribers([]);
        toast.error(res?.data?.error, { autoClose: 3000 });
      }
    };
    data();
  }, []);
  return (
    <div>
      <Head>
        <title>Agacy Inc</title>
        <meta name="description" content="Admin panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-[90%] ml-[5%] mt-8 text-black">
        <Link href="/">
          <h1 className="font-bold text-2xl">Agacy Inc Subscribers</h1>
        </Link>
        <h3>
          These is a list of individuals and their emails waiting for us to
          launch
        </h3>
        <div className="w-full">
          {subscribers &&
            subscribers[0] &&
            subscribers.map((subscriber) => (
              <div className="px-2 py-4 border-b" key={subscriber.email}>
                {subscriber.email}
              </div>
            ))}
          {subscribers && !subscribers[0] && (
            <div className="px-2 py-4 border-b text-red-700 w-full flex justify-center">
              <span>No subscribers yet</span>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
