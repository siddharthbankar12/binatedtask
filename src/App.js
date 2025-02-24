import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Tictactoe from "./Tictactoe"; // Import the TicTacToe component
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainContainer">
              <div className="short-introduction">
                <p>
                  <span>Hello,</span> my name is Siddharth Bankar. I have
                  completed my MCA from MIT-ADT College, Pune, and I am strongly
                  interested in full-stack web development. I worked as a
                  Frontend Intern at Sharadchandra Techventure Pvt. Ltd, where I
                  helped build responsive and user-friendly web applications.
                  After my internship, I joined a MERN stack course to enhance
                  my skills in full-stack development. My technical expertise
                  includes HTML, CSS, JavaScript, React, MongoDB, SQL, and
                  GitHub. I am a quick learner, problem solver, and a team
                  player. I am excited to apply my skills and grow in a
                  professional environment.
                </p>
              </div>

              <div className="linksUp">
                <a
                  href="https://github.com/siddharthbankar12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-bankar-561a50236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>

              <Link to="/game">
                <button className="surprise-btn">Surprise Me</button>
              </Link>
            </div>
          }
        />

        <Route path="/game" element={<Tictactoe />} />
      </Routes>
    </Router>
  );
};

export default App;
