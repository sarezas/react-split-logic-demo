import "./styles.css";

const View = ({ msg, isVisible }: ErrorProps): JSX.Element => {
  // only html render logic goes here
  if (!isVisible) {
    return <></>;
  }

  return (
    <div className="error--container">
      <div className="error--text">{msg}</div>
    </div>
  );
};

export default View;
