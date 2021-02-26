const React = require("react");

class Description extends React.Component {
  render() {
    return (
      <div className="description-card">
        <h1 className="intro-quote"> Hi, I'm Mike ~ </h1>
        <h6 className="location">
          {" "}
          <i className="fas fa-home fa-lg"></i> Living in Boston, MA{" "}
        </h6>
        <i className="fas fa-quote-left fa-2x"></i>
        <p className="about-paragraph">
          I'm a deeply curious and motivated software developer whose interest in
          tinkering and building amazing apps pushes him to pursue perfection.
          <br/> <br/>
          My education and volunteering experience drives my thoughtful approach towards building apps centered around the human experience. As a science major with a keen eye for detail, I adapt quickly to find concise engineering solutions and makes me a great developer for any role.
        </p>
        <div className="padding">
          <a className="" href="../../public/documents/MichaelTruongResume" download> Download my resume ~ </a>
        </div>
        <div className="padding">
        <h5 className=""> Fun Hobbies! </h5>
        {/* <p className="alt-text-color"> 🛫 Travel </p> */}
        <p className="alt-text-color"> 🏔 Nature hikes </p>
        <p className="alt-text-color"> 🏃🏻‍♂️ Outdoor running </p>
        <p className="alt-text-color"> 🎾 Playing tennis </p>
        <p className="alt-text-color"> 🧘🏻‍♂️ Guided meditation</p>
        <p className="alt-text-color"> 🎮 Video games (currently replaying Metroid Prime)</p>
        </div>
      </div>
    );
  }
}

module.exports = Description;
