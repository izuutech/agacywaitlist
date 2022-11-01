export default function EmailInput() {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="rounded-full w-full md:w-[60%] flex bg-slate-100 overflow-hidden">
        <input
          type="email"
          className="w-full py-2 px-4 bg-transparent outline-none"
          placeholder="Email address"
        />
        <button className="bg-[#00983D] text-white py-2 px-4 w-2/4 md:w-1/4 rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}
