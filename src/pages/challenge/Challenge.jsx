import "./challenge.css";
import compninos from "../../images/marineCompetition.png";
import misionimg from "../../images/mision.jpg";
import visionimg from "../../images/vision.jpg";
import peces2 from "../../images/FishGroup2.png";
import peces1 from "../../images/FishGroup1.png";
import task1 from "../../images/task1.jpg";
import task2 from "../../images/task2.jpg";
import task3 from "../../images/task3.jpg";
import task4 from "../../images/task4.jpg";
import info1 from "../../images/challenge2.png";
import info2 from "../../images/challenge5.png";
import info3 from "../../images/challenge7.png";

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
        <div className="peces-right">
          <img className="peces2" src={peces2}></img>
        </div>
      </div>

      <div className="mision">
        <div className="left-ContainerM">
          <h2>
            Mision
          </h2>
          <p>
            Inspire and challenge students to learn and creatively apply STEM
            skills to solving real-world problems in a way that strengthens
            their critical thinking, collaboration, entrepeneurship, and
            innovation and prepares them for the Blue Economy workforce.
          </p>
        </div>
        <div clasName="right-ContainerM">
          <div className="image-WrapperM">
            <img className="misionimg" src={misionimg}></img>
          </div>
        </div>
      </div>

      <div className="vision">
        <div className="left-ContainerV">
          <div className="image-WrapperV">
            <img className="visionimg" src={visionimg}></img>
          </div>
        </div>
        <div className="peces-left">
          <img className="peces1" src={peces1}></img>
        </div>
        <div className="right-ContainerV">
          <h2>
            Vision
          </h2>
          <p>
            Global community of learners, inspired by the ocean, innovating and
            collaborating to address societal changes.
          </p>
        </div>
      </div>

      <div className="misiontasks">
        <div className="tasktxt">
          <h1>
            2024 MISSION <span class="color">TASKS</span>
          </h1>
        </div>
        <div className="imgstask">
          <div className="task1">
            <div className="imagen-task1">
              <img className="task1" src={task1}></img>
            </div>
            <div className="task1txt">
              <p>
                SMART cables for ocean observing
              </p>
            </div>
          </div>
          <div className="task2">
            <div className="imagen-task2">
              <img className="task2" src={task2}></img>
            </div>
            <div className="task2txt">
              <p>
                SMART cables for ocean observing
              </p>
            </div>
          </div>
          <div className="task3">
            <div className="imagen-task3">
              <img className="task3" src={task3}></img>
            </div>
            <div className="task3txt">
              <p>From the Red Sea to Tennessee</p>
            </div>
          </div>
          <div className="task4">
            <div className="imagen-task3">
              <img className="task4" src={task4}></img>
            </div>
            <div className="task4txt">
              <p>From the Red Sea to Tennessee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <div className="infotitle">
          <h1>
          The ocean we <span class="color">need</span> <br></br>
          for the future we <span class="color">want</span> 
          </h1>
        </div>
        <div className="infodatos">
          <div className="infotxt">
            <p>Again this year the MATE ROV Competition is highlighting the 
              United Nations Decade of Ocean Science for Sustainable Development
              and aligning its mission tasks with the 10 Challenges for 
              Collective Impact.<br></br>
              <br></br>
              Also it continues to inspire ESG principles in order to do 
              “good for good” for our ocean planet and global community.</p>
          </div>
          <div className="inforight">
            <div className="info1">
              <div className="infoimg1">
                <img className="img1" src={info1}></img>
              </div>
              <div className="infotxt1">
                <p>
                  Protect and restore ecosystems and biodiversity
                </p>
              </div>
            </div>
            <div className="info2">
              <div className="infotxt2">
                <p>
                  Unlock ocean-based solutions to climate changey
                </p>
              </div>
              <div className="infoimg2">
                <img className="img2" src={info2}></img>
              </div>
            </div>
            <div className="info3">
              <div className="infoimg3">
                <img className="img3" src={info3}></img>
              </div>
              <div className="infotxt3">
                <p>
                  Expand the Global Ocean Observing System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Challenge;
