import "./challenge.css";
import compninos from "../../images/marineCompetition.png";

const Challenge = () => {
  return (
    <main className="main">
      <div className="challenge">
        <div className="left-Container">
          <div className="image-Wrapper">
            <img className="compninos" src={compninos}></img>
          </div>
        </div>

        <div className="right-Container">
          <h1>
            <b>About</b>
          </h1>
          <p>
            The MATE ROV Competition is an annual event that brings together
            teams from around the world to compete in the design and operation
            of remotely operated underwater vehicles (ROVs). This event
            challenges participants to demonstrate their skills in areas such as
            engineering, electronics, programming and teamwork.
          </p>

          <button className="learnbottom">Learn More</button>
        </div>
      </div>

      <div className="vision">
        <img className="imgvision" src="src/images/"></img>
        <div className="visontext">
          <h2>Mision</h2>
          <p>
            Inspire and challenge students to learn and creatively apply STEM
            skills to solving real-world problems in a way that strengthens
            their critical thinking, collaboration, entrepeneurship, and
            innovation and prepares them for the Blue Economy workforce.
          </p>
        </div>
      </div>

      <div className="mision">
        <img className="imgmision" src="src/images/"></img>
        <div className="misiontext"></div>
        <h2>Vision</h2>
        <p>
          Global community of learners, inspired by the ocean, innovating and
          collaborating to address societal changes.
        </p>
      </div>
    </main>
  );
};

export default Challenge;
