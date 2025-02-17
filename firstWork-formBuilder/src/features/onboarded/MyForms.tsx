import { useState } from "react";
import CreateFormPage from "./CreateFormPage";
import { useUserContext } from "../../state/useUserContext";
import "./myforms.css";
function MyForms() {
  const [createClicked, setCreateClicked] = useState(false);

  const handleCreate = () => {
    setCreateClicked(true);
  };
  const { clearUser } = useUserContext();

  const userName = localStorage.getItem("userName");
  return !createClicked ? (
    <div>
      <h2>Hi {userName}, create a form or check your previous forms!</h2>
      <div className="profileButtons">
        <button className="createBtn" onClick={handleCreate}>
          Create
        </button>
        <button className="createBtn">My forms</button>
        <button className="signMeOut" onClick={clearUser}>
          Signout
        </button>
      </div>
    </div>
  ) : (
    <CreateFormPage />
  );
}
export default MyForms;
