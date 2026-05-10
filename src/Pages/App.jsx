import { useState } from "react";
import AuthContainer from "../components/AuthContainer";

function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  return (
    <AuthContainer
      isSignUpActive={isSignUpActive}
      setIsSignUpActive={setIsSignUpActive}
    />
  );
}

export default App;