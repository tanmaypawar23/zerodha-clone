import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/tanmayPawar.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Tanmay Pawar</h4>
          <h6>Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            I am a Full-Stack Developer and BE IT student at Savitribai Phule
            Pune University, passionate about building scalable and user-centric
            web applications.
          </p>

          <p>
            I have hands-on experience in developing full-stack projects,
            focusing on responsive design, efficient backend logic, and seamless
            database integration using modern web technologies.
          </p>

          <p>
            I continuously enhance my technical skills to deliver reliable,
            maintainable, and high-quality software solutions.
          </p>

          <p>
            Connect with me on
            <a href="https://www.linkedin.com/in/tanmay-pawar-4a072b293">
              LinkedIn
            </a>{" "}
            /<a href="https://github.com/tanmaypawar23">GitHub</a> /
            <a href="">Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
