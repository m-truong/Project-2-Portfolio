const React = require("react");

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-card padding">
        <h5> Proficiences ~ </h5>
        <div className="left">
          <h6> Languages: </h6>
          <p>
            <span>
              <i class="fab fa-html5"></i> HTML |{" "}
            </span>
            <span>
              <i class="fab fa-css3-alt"></i> CSS |{" "}
            </span>
            <span>
              <i class="fab fa-js"></i> JavaScript |{" "}
            </span>
            <span>
              <i class="fab fa-java"></i> Java |{" "}
            </span>
            <span>
              <i class="far fa-gem"></i> Ruby |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> SQL |{" "}
            </span>
            <span>
              <i class="fas fa-table"></i> NoSQL |{" "}
            </span>
          </p>
        </div>
        <div className="left">
          <h6> Frontend Libraries: </h6>
          <p>
            <span>
              <i class="fas fa-code"></i> jQuery |{" "}
            </span>
            <span>
              <i class="fab fa-bootstrap"></i> Bootstrap |{" "}
            </span>
            <span>
              <i class="fab fa-react"></i> React.js |{" "}
            </span>
          </p>
        </div>
        <div className="left">
          <h6> Backend Libraries: </h6>
          <p>
            <span>
              <i class="fab fa-node-js"></i> Node.js |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Express |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> MongoDB |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Mongoose |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> PostgreSQL |{" "}
            </span>
            <span>
              <i class="far fa-gem"></i> RubyOnRails |{" "}
            </span>
          </p>
        </div>
        <div className="left">
          <h6> Developer Tools: </h6>
          <p>
            <span>
            <i class="fas fa-terminal"></i> Command Line |{" "}
            </span>
            <span>
              <i class="fab fa-github"></i> GitHub |{" "}
            </span>
            <span>
              <i class="fas fa-paper-plane"></i> Postman |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Heroku |{" "}
            </span>
          </p>
        </div>
        <div className="left">
          <h6> Programming Paradigms: </h6>
          <p>
            <span>
              <i class="fas fa-code"></i> Object-Oriented Programming |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Functional Programming |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> RESTful API |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> MVC Design Pattern |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Data Structures |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Algorithms |{" "}
            </span>
            <span>
              <i class="fas fa-code"></i> Big O Notation |{" "}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Skills;
