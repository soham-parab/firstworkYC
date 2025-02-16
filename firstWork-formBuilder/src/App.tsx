import "./App.css";
import { useIsUserStored } from "./hooks/useIsUserStored";
import MyForms from "./Onboarded/MyForms";
import Welcome from "./Onboarding/Welcome";

function App() {
  const isUser = useIsUserStored();
  return <div className="container">{isUser ? <MyForms /> : <Welcome />}</div>;
}

export default App;
