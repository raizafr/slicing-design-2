import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
const YourInfo = () => {
  return (
    <section className="w-full flex justify-center max-h-screen">
      <div className=" md:w-9/12 w-11/12 bg-white -mt-28 md:mt-0 px-5 shadow-md md:shadow-none rounded-2xl py-7 md:flex md:flex-col justify-between">
        <div>
        <div className="space-y-3">
          <h1 className="md:text-5xl text-3xl font-bold">Personal Info</h1>
          <p className="opacity-80">
            Please provide your name, emai address, and phone number
          </p>
        </div>
        <div className="space-y-6 mt-10">
          <Input
            type="text"
            name="name"
            placeholder="e.g Raiza Farhan"
            label="Name"
            labelFor="name"
          />
          <Input
            type="email"
            name="email"
            placeholder="e.g raizafarhan@lorem.com"
            label="Email"
            labelFor="email"
          />
          <Input
            type="tel"
            name="tel"
            placeholder="e.g Raiza Farhan"
            label="Phone Number"
            labelFor="tel"
          />
        </div>
        </div>
        <div className="flex justify-end mt-28 h-ful">
          <Link to={"/select-plan"}>
            <Button name="Next Step" hover='hover:bg-[#948BFF]' color='bg-[#03295A] text-white'/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YourInfo;
