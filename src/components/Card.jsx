import { ReactSVG } from "react-svg";

const Card = (props) => {
  return (
    <div className="w-full md:w-28 lg:w-40 py-4 px-3 rounded-lg border hover:bg-[#F8F9FE] hover:border-blue-400 md:space-y-8 flex md:block space-x-4 md:space-x-0">
      <ReactSVG src={props.imageSvg} className=""/>
      <div className="">
        <h2 className="font-bold">{props.title}</h2>
        <p className="text-sm opacity-60">{props.subtite}</p>
      </div>
    </div>
  );
};

export default Card;
