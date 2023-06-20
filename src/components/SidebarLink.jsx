import { Link } from "react-router-dom";

const SidebarLink = (props) => {
  return (
    <Link className="flex space-x-4 px-10" to={props.link}>
      <div className="w-fit flex items-center ">
        <span
          className={`border px-2.5 py-0.5 rounded-full font-bold ${props.active}`}
        >
          {props.number}
        </span>
      </div>
      <div className="text-white md:leading-3 hidden md:block">
        <h3 className="opacity-70">{props.step}</h3>
        <h4 className="font-semibold text-lg">{props.info}</h4>
      </div>
    </Link>
  );
};

export default SidebarLink;
