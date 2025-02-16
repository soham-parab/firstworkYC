import { useState, ChangeEvent } from "react";
import Loader from "../Components/Loader/Loader";

function Welcome() {
  const [userName, setUserName] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleNext = (): void => {
    localStorage.setItem("userName", userName);
    setLoader(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to your seamless form builder!</h1>
      <h3>Let's start with your name!</h3>
      <div className="input-container">
        <input
          type="text"
          value={userName}
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
    </div>
  );
}

export default Welcome;
