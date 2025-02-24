import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let route = useNavigate();
  return (
    <>
      <div className="mainContainer">
        <div className="short-introduction">
          <p>
            <span>Hello,</span> my name is Siddharth Bankar. I have completed my
            MCA from MIT-ADT College, Pune, and I am strongly interested in
            full-stack web development. I worked as a Frontend Intern at
            Sharadchandra Techventure Pvt. Ltd, where I helped build responsive
            and user-friendly web applications. After my internship, I joined a
            MERN stack course to enhance my skills in full-stack development. My
            technical expertise includes HTML, CSS, JavaScript, React, MongoDB,
            SQL, and GitHub. I am a quick learner, problem solver, and a team
            player. I am excited to apply my skills and grow in a professional
            environment.
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

        <button
          className="surprise-btn"
          onClick={() => {
            route("/game");
          }}
        >
          Surprise Me
        </button>
      </div>
    </>
  );
};

export default Home;
