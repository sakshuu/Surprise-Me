import React, { useState } from "react";
import "./assets/css/index.css"

const App = () => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
  ];

  const [currentJoke, setCurrentJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
    setShowJoke(true); 
  };

  return (
    <div
      className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#1A1A1A", 
        color: "#FFFFFF", 
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <div className="text-center">
        <h1
          className="display-4 mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            color: "#9C27B0", 
          }}
        >
          Welcome to the Joke Generator!
        </h1>
        <p className="lead mb-4" style={{ color: "#E0E0E0" }}>
          Click the button below to get a random joke.
        </p>
        <button
          className="btn btn-lg"
          onClick={handleSurpriseMe}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            backgroundColor: "#9C27B0",
            color: "#FFFFFF", 
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7B1FA2")} 
          onMouseOut={(e) => (e.target.style.backgroundColor = "#9C27B0")} 
        >
          Surprise Me!
        </button>
        {showJoke && (
          <div
  className="mt-4 p-3 rounded shadow-sm joke-container" 
  style={{
    backgroundColor: "#2C2C2C",
    color: "#E0E0E0",
    border: "1px solid #9C27B0",
  }}
>
  <p className="h5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
    {currentJoke}
  </p>
</div>
        )}
      </div>
    </div>
  );
};

export default App;