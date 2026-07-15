import juice from "./assets/juice.png";
import student from "./assets/student.png";
import robodog from "./assets/robodog.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,

  FaPhone,
} from "react-icons/fa";
import resume from "./assets/resume.pdf";
import hero from "./assets/anjali.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2 className="logo">AV</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

     <section className="hero" id="home">
  <img src={hero} alt="Anjali Verma" className="hero-img" />

  <p className="intro">👋 Hello, I'm</p>

  <h1>Anjali Verma</h1>

  <h2>AI Engineer | Full Stack Developer</h2>

  <p className="desc">
    Passionate about Artificial Intelligence, Full Stack Development,
    Machine Learning and creating modern web applications.
  </p>

  <div className="buttons">

    <button
      onClick={() => {
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      View Projects
    </button>

    <button
      className="contact"
      onClick={() => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      Contact Me
    </button>

    <a href={resume} download>
      <button>Download Resume</button>
    </a>

  </div>
  
</section>
      <section className="about" id="about">

  <h2>About Me</h2>

  <p>
    I'm a Final Year B.Tech CSE (AI) student passionate about
    Artificial Intelligence, Full Stack Development and Machine Learning.
    I love building modern websites, solving real-world problems and
    continuously learning new technologies.
  </p>

</section>
<section className="skills" id="skills">

  <h2>My Skills</h2>
 
    <div className="skill-grid">

    <div className="card">💻 HTML</div>

    <div className="card">🎨 CSS</div>

    <div className="card">⚛ React</div>

    <div className="card">🟨 JavaScript</div>

    <div className="card">🐍 Python</div>

    <div className="card">🤖 AI & Machine Learning</div>

  </div>

</section>

<section className="projects" id="projects">

  <h2>My Projects</h2>

  <div className="project-grid">

    <div className="project-card">

<img
  src={robodog}
  alt="AI Robo Dog"
  className="project-img"
/>

  <h3>🤖 Arizen A6 - AI Robo Dog</h3>

  <p>
    AI-powered robotic dog capable of obstacle avoidance,
    intelligent movement, and computer vision using Python,
    Raspberry Pi, OpenCV, and TensorFlow.
  </p>

  <div className="tech-stack">
    <span>Python</span>
    <span>OpenCV</span>
    <span>TensorFlow</span>
    <span>ESP32</span>
  </div>

  <div className="project-buttons">

  <a
    href="https://github.com/Anjali-creater"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href="#"
    target="_blank"
    rel="noreferrer"
  >
    <button className="contact">Live Demo</button>
  </a>

</div>

</div>

    <div className="project-card">

  <img
    src={juice}
    alt="Fruit Juice Delivery Website"
    className="project-img"
  />

  <h3>🍕 Fruit Juice Delivery Website</h3>

  <p>
    Responsive multiple category juice ordering website built using React.js with modern UI,
    smooth navigation, reusable components, and mobile-friendly design.
  </p>

  <div className="tech-stack">
    <span>React</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>

 <div className="project-buttons">

  <a
    href="https://github.com/Anjali-creater/fruit-juice-website"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href="http://fruit-juice-website.netlify.app/"
    target="_blank"
    rel="noreferrer"
  >
    <button className="contact">Live Demo</button>
  </a>

</div>

</div>

 <div className="project-card">
  <img
    src={student}
    alt="Student-performance-predictor-System"
    className="project-img"
  />

  <h3>📊 Student-performance-predictor-System</h3>

  <p>
    Student result management system for maintaining records,
    calculating marks, and displaying academic performance.
  </p>

  <div className="tech-stack">
    <span>Python</span>
    <span>SQL</span>
    <span>HTML</span>
  </div>

  <div className="project-buttons">

  <a
    href="https://github.com/Anjali-creater/student-performance-predictor"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href="https://student-performance-predictor-anh5w8j88kccj4rfwrwcbj.streamlit.app/"
    target="_blank"
    rel="noreferrer"
  >
    <button className="contact">Live Demo</button>
  </a>

</div>

</div>
</div>

  <section className="education" id="education">

  <h2>Education</h2>

  <div className="education-card">

    <h3>B.Tech – Computer Science Engineering (AI)</h3>

    <h4>Babu Banarasi Das University, Lucknow</h4>

    <p>2023 – 2027 (Expected)</p>

    <p><strong>CGPA:</strong> 8.77 / 10</p>

  </div>
  

<section className="certifications" id="certifications">

  <h2>Certifications</h2>

  <div className="cert-grid">

  </div>

</section>

    <div className="cert-grid">

    <div className="cert-card">
      <h3>☁️ AWS Academy Cloud Foundations</h3>
      <p>AWS Academy • 2025</p>
    </div>

    <div className="cert-card">
      <h3>🐍 Python for Data Science</h3>
      <p>Reliance Foundation Skilling Academy • 2026</p>
    </div>

    <div className="cert-card">
      <h3>📊 Deloitte Data Analytics</h3>
      <p>Forage Job Simulation • 2026</p>
    </div>

    <div className="cert-card">
      <h3>🤖 India AI Impact Buildathon</h3>
      <p>GUVI × IndiaAI • 2026</p>
    </div>

  </div>

</section>
<section className="achievements" id="achievements">

  <h2>Achievements</h2>

  <div className="achievement-grid">

    <div className="achievement-card">
      <h3>🥉 Hackathon 2.0</h3>
      <p>Secured 3rd Position for developing an innovative AI-based solution.</p>
    </div>

    <div className="achievement-card">
      <h3>🤖 India AI Impact Buildathon</h3>
      <p>Participated in the national AI innovation challenge organized by GUVI × IndiaAI.</p>
    </div>

    <div className="achievement-card">
      <h3>📊 Deloitte Job Simulation</h3>
      <p>Completed Data Analytics virtual experience program by Deloitte (Forage).</p>
    </div>

    <div className="achievement-card">
      <h3>☁ AWS Certified</h3>
      <p>Successfully completed AWS Academy Cloud Foundations certification.</p>
    </div>

  </div>

</section>
<section className="experience" id="experience">

  <h2>Experience</h2>

  <div className="experience-card">

    <h3>Fresher</h3>

    <p>
      Actively building AI, Machine Learning, Full Stack Development,
      and Data Science projects while continuously enhancing technical
      skills through certifications, hackathons, and hands-on practice.
    </p>

    <ul>
      <li>✔ Developed AI and Web Development projects.</li>
      <li>✔ Participated in Hackathons and Buildathons.</li>
      <li>✔ Strong foundation in React, Python, AI/ML and Data Analytics.</li>
    </ul>

  </div>

</section>
<section className="services" id="services">

  <h2>What I Do</h2>

  <div className="services-grid">

    <div className="service-card">
      <h3>🤖 AI & Machine Learning</h3>
      <p>
        Building intelligent applications using Python, Machine Learning,
        Deep Learning, Computer Vision and Data Analysis.
      </p>
    </div>

    <div className="service-card">
      <h3>💻 Full Stack Development</h3>
      <p>
        Developing responsive web applications using HTML, CSS,
        JavaScript, React.js, Node.js and modern UI principles.
      </p>
    </div>

    <div className="service-card">
      <h3>📊 Data Analytics</h3>
      <p>
        Working with Python, Pandas, NumPy and visualization tools
        to analyze and derive insights from data.
      </p>
    </div>

  </div>

</section>
<section className="stats">

  <div className="stat-card">
    <h2>8+</h2>
    <p>Projects</p>
  </div>

  <div className="stat-card">
    <h2>4+</h2>
    <p>Certifications</p>
  </div>

  <div className="stat-card">
    <h2>3rd</h2>
    <p>Hackathon Rank</p>
  </div>

  <div className="stat-card">
    <h2>8.77</h2>
    <p>CGPA</p>
  </div>

</section>
</section>

<section className="contact-section" id="contact">

  <h2>Contact Me</h2>

  <p>Let's build something amazing together.</p>

  <div className="contact-info">

    <p><FaEnvelope /> av1024501@gmail.com</p>

    <p><FaPhone /> +91 6388208740</p>

    <p>📍 Lucknow, India</p>

  </div>

  <div className="contact-links">

    <a
      href="https://github.com/Anjali-creater"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub /> GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/anjali-verma-aa1024501v"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin /> LinkedIn
    </a>

  </div>

</section>

<footer className="footer">

  <p>© 2026 Anjali Verma | Built with React ⚛</p>

 </footer>

 </div>
 );
}
export default App;
  