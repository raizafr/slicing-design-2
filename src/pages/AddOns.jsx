import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useContext } from "react";
import { PlanContext } from "../context/PlanContext";
import CardCheckBox from "../components/CardCheckBox";

const AddOns = () => {
  const { plan } = useContext(PlanContext);

  return (
    <section className="w-full flex justify-center">
      <div className=" md:w-9/12 w-11/12 bg-white -mt-28 md:mt-0 px-5 shadow-md md:shadow-none rounded-2xl py-7 space-y-7 md:flex md:flex-col justify-between">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="md:text-5xl text-3xl font-bold">Pick add-ons</h1>
            <p className="opacity-80">
              Add-ons help enhance your gaming experience
            </p>
          </div>
          <div className="space-y-6">
            <CardCheckBox
              title="Online service"
              subTitle="Access to multiplayer games"
              pay={!plan ? "+$1/mo" : "+$10/yr"}
            />
            <CardCheckBox
              title="Large storage"
              subTitle="Extra 1TB of cloud save"
              pay={!plan ? "+$2/mo" : "+$20/yr"}
            />
            <CardCheckBox
              title="Customable profil"
              subTitle="Custom theme on your profile"
              pay={!plan ? "+$2/mo" : "+$20/yr"}
            />
          </div>
        </div>
        <div className="flex justify-between mt-28">
          <Link to={"/select-plan"}>
            <Button name="Go Back" />
          </Link>
          <Link to={"/summary"}>
            <Button
              name="Next Step"
              hover="hover:bg-[#948BFF]"
              color="bg-[#03295A] text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddOns;
