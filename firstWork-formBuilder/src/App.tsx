import "./App.css";
import { useIsUserStored } from "./hooks/useIsUserStored";
import MyForms from "./features/onboarded/MyForms";
import Welcome from "./features/onboarding/Welcome";

function App() {
  const isUser = useIsUserStored();
  return <div className="container">{isUser ? <MyForms /> : <Welcome />}</div>;
}

export default App;
