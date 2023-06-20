import { useState } from "react";

const CardCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={`flex justify-between border px-5 py-3 rounded-lg hover:border-blue-400 hover:bg-[#F8F9FE] ${
        isChecked ? "border-blue-400 bg-[#F8F9FE]" : ""
      }`}
    >
      <div className="flex space-x-6">
        <input
          type="checkbox"
          name=""
          id=""
          className="w-4"
          onChange={handleCheck}
          checked={isChecked}
        />
        <div>
          <h3 className="md:text-lg font-bold">{props.title}</h3>
          <h4 className="opacity-60 font-semibold">{props.subTitle}</h4>
        </div>
      </div>
      <div className="text-blue-500 items-center flex">{props.pay}</div>
    </div>
  );
};

export default CardCheckBox;
