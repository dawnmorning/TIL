const MyButton = ({ text, type, onClick }) => {
    // 이거 중에 없으면 default로
  const btnType = ["postive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
