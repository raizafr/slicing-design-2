const Button = (props) => {
  return (
    <button className={`text-opacity-80 px-6 py-2.5 rounded-lg border font-semibold ${props.hover} ${props.color}` }>
      {props.name}
    </button>
  );
};

export default Button;
