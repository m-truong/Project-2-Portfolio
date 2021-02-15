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
        <i class="fas fa-quote-left fa-2x"></i>
        <p className="about-paragraph">
          I'm deeply curious and motivated software developer whose interest in
          tinkering and building wonderful apps pushes him to pursue perfection.
          <br/> <br/>
          I'm a well-traveled educator whose teaching and volunteer background
          informs my thoughtful and meditative approach towards any dillema. My
          background in the biological sciences also drives my constant
          curiosity towards funding precise solutions to any problem.
        </p>
        <h5 className=""> Fun Hobbies! </h5>
        <p> 🌲 🏔 Hiking outdoors!</p>
        <p> 🏃🏻‍♂️ Running exercise </p>
        <p> 🧘🏻‍♂️ Guided meditation</p>
        <p> 🎮 Video games (currently playing replaying Fez)</p>
      </div>
    );
  }
}

module.exports = Description;
