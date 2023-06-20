import { Link } from "react-router-dom";
import Button from "../components/Button";
import { PlanContext } from "../context/PlanContext";
import { useContext } from "react";

const Summary = () => {
  const { plan } = useContext(PlanContext);
  return (
    <section className="w-full flex justify-center">
      <div className=" md:w-9/12 w-11/12 bg-white -mt-28 md:mt-0 px-5 shadow-md md:shadow-none rounded-2xl py-7 space-y-7 md:flex md:flex-col justify-between">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="md:text-5xl text-3xl font-bold">Finishing up</h1>
            <p className="opacity-80">
              Double-check everything looks OK berfore confirming
            </p>
          </div>
          <div className="bg-[#F8F9FE] p-4 md:p-7 space-y-5">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold">
                  Arcade {!plan ? "(Monthly)" : "(Yearly)"}
                </h4>
                <p className="underline opacity-60">Change</p>
              </div>
              <p className="font-bold">{!plan ? "$9/mo" : "$90/mo"}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="opacity-60">Online service</p>
              <p className="opacity-70">{!plan ? "$1/mo" : "$10/mo"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="opacity-60">Larger storage</p>
              <p className="opacity-70">{!plan ? "$2/mo" : "$20/mo"}</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-4 md:px-7">
            <p className="opacity-60">
              Total {!plan ? "(per month)" : "per year"}
            </p>
            <p className="text-[#4C3AE7] font-bold">
              {!plan ? "$12/mo" : "$120/mo"}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-28">
          <Link to={"/add-ons"}>
            <Button name="Go Back" />
          </Link>
          <Link to={"/finish"}>
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

export default Summary;
