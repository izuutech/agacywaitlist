import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToWaitlist } from "../services/endpoints";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (email) {
      const data = await addToWaitlist({ email });
      if (data?.data?.message) {
        toast.success(data?.data?.message, { autoClose: 3000 });
      } else {
        toast.error(data?.data?.error, { autoClose: 3000 });
      }
    } else {
      toast.warning("Please input your email address", { autoClose: 3000 });
    }
  };
  return (
    <form
      onSubmit={submit}
      className="w-full flex justify-center my-4 text-black"
    >
      <div className="rounded-full w-full md:w-[60%] flex bg-slate-100 overflow-hidden">
        <input
          type="email"
          className="w-full py-2 px-4 bg-transparent outline-none"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="bg-[#00983D] text-white py-2 px-4 w-2/4 md:w-1/4 rounded-full">
          Subscribe
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
