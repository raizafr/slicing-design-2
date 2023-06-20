import { ReactSVG } from "react-svg";
import iconTanks from "../../public/assets/images/icon-thank-you.svg";
const Finish = () => {
  return (
    <section className="w-full flex justify-center item-center">
      <div className=" md:w-9/12 w-11/12 bg-white -mt-28 md:mt-0 px-5 shadow-md md:shadow-none rounded-2xl py-7 flex flex-col items-center justify-center space-y-6 text-center">
        <ReactSVG src={iconTanks} />
        <h1 className="md:text-5xl text-3xl font-bold">Thank You!</h1>
        <p className="opacity-70">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </section>
  );
};

export default Finish;
