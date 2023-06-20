import { Link } from "react-router-dom";

const SidebarLinkMobile = (props) => {
  return (
    <div className="w-fit flex items-center">
      <Link
        to={props.link}
        className={`border px-2.5 py-0.5 rounded-full font-semibold ${props.active}`}
      >
        {props.number}
      </Link>
    </div>
  );
};

export default SidebarLinkMobile;
