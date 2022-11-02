import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="w-[100%] bg-[#3E3E3E] py-4 text-black">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="text-white text-xl">Follow us on</div>
        <div className="ml-2 flex mt-2 md:mt-0">
          {/* <img src="/instagram.png" className="w-4 h-4 ml-1" /> */}
          <AiOutlineInstagram color="#fff" size={24} />
          <SlSocialFacebook color="#fff" size={24} />
          <TfiTwitter color="#fff" size={24} />
          {/* <img src="/fb.png" className="w-4 h-4 mx-1" />
          <img src="/twitter.png" className="w-4 h-4 mr-1" /> */}
        </div>
      </div>
      <div className="text-center text-white my-2">
        Made with love from Agacy Inc.
      </div>
      <div className="text-center text-sm text-white mb-2">
        2022 All Rights Reserved.
      </div>
    </footer>
  );
}
