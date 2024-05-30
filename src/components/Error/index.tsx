import View from "./view";

const Component = ({ msg, isVisible }: ErrorProps): JSX.Element => {
  // all component logic goes here, pass props to the view
  return <View isVisible={isVisible} msg={msg} />;
};

export default Component;
