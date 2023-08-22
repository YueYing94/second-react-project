import React from "react";
import "./App.css";
import { User, Country } from "./components/User";

function App() {
  return (
    <div className="App">
      <User
        age={29}
        isAvailable={true}
        country={Country.Netherlands}
        email="sarahyingyue1994@gmail.com"
        github="https://github.com/YueYing94"
        linkedin="https://www.linkedin.com/in/yueying94/"
        skills={["JavaScript", "Ruby on Rails", "React", "HTML", "CSS"]}
      />
    </div>
  );
}

export default App;
