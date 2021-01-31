import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaFacebook,
  FaGithub,
  FaHackerrank,
  FaLinkedin,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <section className="info">
        <div className="info-left">
          <h1 className="info-left__name">
            <span className="greeting">Hi,</span>
            I'm <span class="highlight-text">Soikat</span>
          </h1>

          <p class="info-left__designation">
            <strong>Front-End Developer</strong>
            {/* <img src="" alt="" /> */}
          </p>

          <p className="info-left__description">
            I am a passionate Front-End Developer. I have
            <strong> 1 year experience</strong> on Front-End Development.
            <br /> I know well
            <strong> HTML, CSS, Bootstrap, JavaScript and React</strong>. I also
            know about NodeJS/ExpressJS, MongoDB, MySQL, SQL, Scss, BEM
            methodology. I love my designation, I believe on my skills.
          </p>

          <a href="#!" className="button btn-resume">
            Download Resume
          </a>
        </div>

        <div className="info-right">
          <figure className="my-image">
            <img
              className="my-image__profile-image"
              src="/img/profile-img.png"
            />
          </figure>
          <article className="social-icons"></article>
        </div>
      </section>

      <section className="skill-area">
        <h2 className="skill-area__title section-title">Skill Set</h2>
        <div className="skills">
          <div className="skills__item html">
            <FaHtml5 /> <span className="sills__name">HTML5</span>
          </div>
          <div className="skills__item css">
            <FaCss3 /> <span className="sills__name">CSS3</span>
          </div>
          <div className="skills__item bootstrap">
            <FaBootstrap /> <span className="sills__name">Bootstrap</span>
          </div>
          <div className="skills__item sass">
            <FaSass /> <span className="sills__name">Sass</span>
          </div>
          <div className="skills__item js">
            <FaJsSquare /> <span className="sills__name">Javascript</span>
          </div>
          <div className="skills__item react">
            <FaReact /> <span className="sills__name">React</span>
          </div>
          <div className="skills__item node">
            <FaNode /> <span className="sills__name">NodeJS</span>
          </div>
          <div className="skills__item git">
            <FaGitAlt /> <span className="sills__name">Git</span>
          </div>
        </div>
      </section>

      <section className="contact-area">
        <article className="social-icons">
          <p className="msg">Please feel free to contact me:</p>
          <p className="email">nurcse5@gmail.com</p>
          <a
            href="https://www.facebook.com/nmsoikat"
            target="_blank"
            className="item facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/nur-mohammad-b4b9b4150/"
            target="_blank"
            className="item linkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/saykat1"
            target="_blank"
            className="item github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.hackerrank.com/nurcse5"
            target="_blank"
            className="item hackerRank"
          >
            <FaHackerrank />
          </a>
        </article>
      </section>
    </section>
  );
}

export default About;
