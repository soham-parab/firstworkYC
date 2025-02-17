import { useState, ChangeEvent } from "react";
import Loader from "../../components/Loader/Loader";
import Toast from "../../components/Toast/Toast";
import { useUserContext } from "../../state/useUserContext";
import { useAsyncCallback } from "../../hooks/handleAsyncCallbacks";

function Welcome() {
  const [inputName, setInputName] = useState<string>("");
  const { createUser } = useUserContext();

  const handleNext = (): void => {
    if (inputName) {
      createUser(inputName);
    }
  };

  const { isLoading, executeCallback, delay } = useAsyncCallback(
    handleNext,
    500
  );

  console.log(isLoading);

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
        <button className="next-button" onClick={executeCallback}>
          Next
        </button>
      </div>
      <div className="content">
        {/* Your form builder content will go here */}
      </div>
      <Loader trigger={isLoading} delay={delay} />
      {!inputName && (
        <Toast
          message={"Please enter username"}
          type="error"
          show={isLoading}
          delay={delay}
        />
      )}
    </div>
  );
}

export default Welcome;
