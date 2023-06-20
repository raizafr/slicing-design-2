const Input = (props) => {
  return (
    <div>
      <div className="flex flex-col space-y-1">
        <label htmlFor={props.labelFor} className="font-semibold">
          {props.label}
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="px-4 py-2 border focus:outline-none focus:border-blue-400 rounded-lg focus:placeholder-blue-400"
        />
      </div>
    </div>
  );
};

export default Input;
