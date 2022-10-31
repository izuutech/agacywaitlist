import EmailInput from "./EmailInput";

export default function Subscribe() {
  return (
    <div className="w-full my-8">
      <h1 className="font-bold text-center text-2xl">
        Sign Up for our Newsletter
      </h1>
      <div className="w-[60%] ml-[20%] text-center">
        Join our newsletter to get exclusive contents, offers, services and
        first access to all our products
      </div>
      <EmailInput />
    </div>
  );
}
