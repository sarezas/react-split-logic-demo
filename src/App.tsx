import { useEffect, useState } from "react";

import Error from "./components/Error";
import "./App.css";

const App = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const errorMsg = "Yo, this is an error message!";

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  }, []);

  return (
    <main>
      <div className="App">
        <Error msg={errorMsg} isVisible={isVisible} />
      </div>
    </main>
  );
};

export default App;
