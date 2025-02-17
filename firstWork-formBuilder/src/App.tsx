import "./App.css";
import MyForms from "./features/onboarded/MyForms";
import Welcome from "./features/onboarding/Welcome";
import { useUserContext } from "./state/useUserContext";

function App() {
  const { isAuthenticated } = useUserContext();
  return (
    <div className="container">
      {isAuthenticated ? <MyForms /> : <Welcome />}
    </div>
  );
}

export default App;
