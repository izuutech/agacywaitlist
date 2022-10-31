export default function Footer() {
  return (
    <footer className="w-[100%] bg-[#3E3E3E] py-4">
      <div className="flex justify-center items-center">
        <div className="text-white text-xl">Follow us on</div>
        <div className="ml-2 flex">
          <img src="/instagram.png" className="w-4 h-4 ml-1" />
          <img src="/fb.png" className="w-4 h-4 mx-1" />
          <img src="/twitter.png" className="w-4 h-4 mr-1" />
        </div>
      </div>
      <div className="text-center text-white">
        Made with love from Agacy Inc.
      </div>
      <div className="text-center text-xs text-white">
        2022 All Rights Reserved.
      </div>
    </footer>
  );
}
