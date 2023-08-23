import React from "react";
import "./App.css";
import { User, Country } from "./components/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Provider } from "react-redux";
import { store } from "./pages/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
