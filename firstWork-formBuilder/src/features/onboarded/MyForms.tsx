import { useState } from "react";
import CreateFormPage from "./CreateFormPage";

function MyForms() {
  const handleFresh = (): void => {
    localStorage.removeItem("userName");
  };
  const [createClicked, setCreateClicked] = useState(false);

  const handleCreate = () => {
    setCreateClicked(true);
  };

  const userName = localStorage.getItem("userName");
  return !createClicked ? (
    <div>
      <h2>Hi {userName}, create a form or check your previous forms!</h2>
      <div className="profileButtons">
        <button className="signMeOut" onClick={handleCreate}>
          Create
        </button>
        <button className="signMeOut" onClick={handleFresh}>
          Signout
        </button>
      </div>
    </div>
  ) : (
    <CreateFormPage />
  );
}
export default MyForms;
