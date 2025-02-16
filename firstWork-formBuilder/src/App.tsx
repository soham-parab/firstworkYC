import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to your seamless form builder!</h1>
      <h3>Let's start with your name!</h3>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          className="name-input"
        />
        <button className="next-button">Next</button>
      </div>
      <div className="content">
        {/* Your form builder content will go here */}
      </div>
    </div>
  );
}

export default App;
