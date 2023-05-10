import "./Button.css";

function Button({ children, className, type, onClick }) {
  const newClassName = "Button " + className;
  return (
    <button className={newClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
