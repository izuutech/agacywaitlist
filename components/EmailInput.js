export default function EmailInput() {
  return (
    <div className="w-full flex justify-center my-4">
      <input
        type="email"
        className="rounded-full w-[60%] bg-slate-50 py-2 px-4"
        placeholder="Email address"
      />
    </div>
  );
}
