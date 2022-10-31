export default function About() {
  return (
    <div className="mt-2">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="w-full md:w-4/12">
          <h3 className="font-bold">What is Agacy?</h3>
          <span>
            Agacyng is an E-commerce platform which is poised with the mission
            of revolutionalising the E-commerce experience of Nigerians by
            proving top-notch buying and selling experience
          </span>
        </div>
        <div className="w-3/4 md:w-3/12">
          <img
            src="/Flat-illustrations-transformed.png"
            className="w-full aspect-auto"
          />
        </div>
        <div className="w-full md:w-4/12">
          <span>
            You no longer need to travel the world to get goods in bulk at
            affordable rates
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center flex-wrap text-center md:text-left">
        <div className="w-3/4 md:w-3/12">
          <img src="/onlineshop.png" className="w-full aspect-auto" />
        </div>
        <div className="w-full md:w-4/12">
          <span>
            You no longer need to travel the world to get goods in bulk at
            affordable rates
          </span>
        </div>
      </div>
    </div>
  );
}
