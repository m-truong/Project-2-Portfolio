const React = require("react");

class PhotoCard extends React.Component {
  render() {
    return (
      <div className="photo-card">
        <img
          className="my-photo"
          src="https://res.cloudinary.com/mtruong/image/upload/v1613352109/michael-travel-zoom_rau0e2.jpg"
          alt="Michael Truong Picture"
        />
        <hr/>
        <a href="mailto:truong.michael.2013@gmail.com" target="_blank">
          <i className="fas fa-envelope fa-lg"></i> truong.michael.2013@gmail.com
        </a>
        <hr/>
        <a href="https://github.com/m-truong/" target="_blank">
        <i className="fab fa-github-square fa-lg"></i> miketruong on GitHub
        </a>
        <hr/>
        <a href="https://www.linkedin.com/in/michael-truong-86939bb5/" target="_blank">
          <i className="fab fa-linkedin fa-lg"></i> miketruong on LinkedIn
        </a>
        <hr/>
        <a href="https://www.instagram.com/miketruong781/" target="_blank">
        <i className="fab fa-instagram-square fa-lg"></i> @miketruong781 on Instagram
        </a>
        <hr/>
      </div>
    );
  }
}

module.exports = PhotoCard;
