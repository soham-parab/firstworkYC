import { useState, ChangeEvent } from "react";
import Loader from "../../components/Loader/Loader";
import Toast from "../../components/Toast/Toast";
import { useUserContext } from "../../state/useUserContext";

function Welcome() {
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const { createUser } = useUserContext();
  const handleNext = (): void => {
    if (!inputName) {
      setErrorMessage("Please enter your name");
      return;
    }
    setLoader(true);
    createUser(inputName);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to your seamless form builder powered by firstWork!</h1>
      <h3>Let's start with your name!</h3>
      <div className="input-container">
        <input
          type="text"
          value={inputName}
          placeholder="Enter your name"
          className="name-input"
          onChange={handleChange}
        />
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="content">
        {/* Your form builder content will go here */}
      </div>
      <Loader trigger={loader} />
      <Toast
        message={errorMessage}
        type="error"
        onClose={() => setErrorMessage("")}
      />
    </div>
  );
}

export default Welcome;
