import { Link } from "react-router-dom";
import Button from "../components/Button";
import Arcade from "../../public/assets/images/icon-arcade.svg";
import Advanced from "../../public/assets/images/icon-advanced.svg";
import Pro from "../../public/assets/images/icon-pro.svg";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { PlanContext } from "../context/PlanContext";

const SelectPlan = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setPlane } = useContext(PlanContext);
  useEffect(() => {
    setPlane(isChecked);
  }, [setPlane, isChecked]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="w-full flex justify-center">
      <div className=" md:w-9/12 w-11/12 bg-white -mt-28 md:mt-0 px-5 shadow-md md:shadow-none rounded-2xl py-7 space-y-7 md:flex md:flex-col justify-between">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="md:text-5xl text-3xl font-bold">Select Your Plan</h1>
            <p className="opacity-80">
              You have the option of monthly or yearly billing
            </p>
          </div>
          <div className="md:flex justify-between space-y-3 md:space-y-0">
            <Card imageSvg={Arcade} title="Arcade" subtite="$9/mo" />
            <Card imageSvg={Advanced} title="Advanced" subtite="$12/mo" />
            <Card imageSvg={Pro} title="Pro" subtite="$15/mo" />
          </div>
          <div className="flex justify-center space-x-5 bg-[#F8F9FE] py-3">
            <div className={`font-bold ${isChecked ? "opacity-60" : ""}`}>
              Monthly
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div className="w-8 h-4 bg-black rounded-full shadow-inner"></div>
                <div
                  className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 transition-transform ${
                    isChecked ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
            <div className={`font-bold ${isChecked ? "" : "opacity-60"}`}>
              Yearly
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-28">
          <Link to={"/"}>
            <Button name="Go Back" />
          </Link>
          <Link to={"/add-ons"}>
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

export default SelectPlan;
