import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");

  const onNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSearchClick = () => {
    setName(inputName);
  };

  return (
    <div className="App">
      <h1 className="title">Wheater App</h1>
      <div className="search-box animate__animated animate__fadeInUp">
        <input
          className="search-input"
          placeholder="Search City"
          type="text"
          value={inputName}
          onChange={onNameChange}
        />
        <button onClick={handleSearchClick} className="search-btn">
          Search
        </button>
        <Weather name={name} />
      </div>
    </div>
  );
}

export default App;
