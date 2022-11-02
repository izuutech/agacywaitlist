import EmailInput from "./EmailInput";

export default function Subscribe() {
  return (
    <div className="w-full my-12 text-black">
      <h1 className="font-bold text-center text-2xl">Join our waitlist</h1>
      <div className="w-[90%] md:w-[60%] ml-[5%] md:ml-[20%] text-center">
        Join our waitlist to get exclusive contents, offers, services and first
        access to all our products. You also get to be notified first, when we
        launch!
      </div>
      <EmailInput />
    </div>
  );
}
