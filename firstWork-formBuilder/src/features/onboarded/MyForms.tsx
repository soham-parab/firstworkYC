import CreateFormPage from "./CreateFormPage";
import MyFormsList from "./MyFormsList";
import { useUserContext } from "../../state/useUserContext";
import "./myforms.css";
import { useAsyncCallback } from "../../hooks/handleAsyncCallbacks";
import Loader from "../../components/Loader/Loader";

function MyForms() {
  const { goTo, page } = useUserContext();
  const { clearUser } = useUserContext();
  const userName = localStorage.getItem("userName");

  const handleCreate = () => {
    goTo("/create");
  };

  const handleMyForms = () => {
    goTo("/my-forms");
  };

  const pageComponents = {
    "/create": <CreateFormPage />,
    "/my-forms": <MyFormsList />,
    "/": (
      <div>
        <h2>Hi {userName}, create a form or check your previous forms!</h2>
        <div className="profileButtons">
          <button className="createBtn" onClick={handleCreate}>
            Create
          </button>
          <button className="createBtn" onClick={handleMyForms}>
            My forms
          </button>
          <button className="signMeOut" onClick={clearUser}>
            Signout
          </button>
        </div>
      </div>
    ),
  } as const;

  return (
    pageComponents[page as keyof typeof pageComponents] || pageComponents["/"]
  );
}

export default MyForms;
