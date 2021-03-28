import Button from "react-bootstrap/Button";
const React = require("react");

class Box extends React.Component {
  render() {
    const properties = this.props.item;
    console.log(properties);
    return (
      <div className="box-style">
        <h1 className="smaller-text">{properties.title}</h1>
        {properties.date ? <h3>{properties.date}</h3> : ""}

        <p>Built with: {} </p>

        {/* <div className="languages-div">
          {project.languages.split("/").map((language, i) => {
            return language[0] === "f" ? (
              <span>
                <i class={language} />{" "}
              </span>
            ) : (
              <span className="languages">{language} |</span>
            );
          })}
        </div> */}

        {/* .split.map over paragraph description and <p> */}
        {properties.description.split("/").map((descrip, i) => {
          return <p className="left add-padding">{descrip}</p>;
        })}
        {/* <p className="left add-padding">{properties.description}</p> */}
        {properties.github ? (
          <>
            <hr />
            <Button
              className="button-style"
              href={properties.github}
              variant="primary"
              target="_blank"
            >
              <i class="fas fa-code"></i> Code
            </Button>
            <Button
              className="button-style"
              href={properties.heroku}
              variant="primary"
              target="_blank"
            >
              <i class="fas fa-play"></i> Live App
            </Button>
            <hr />
          </>
        ) : (
          <hr />
        )}
      </div>
    );
  }
}

module.exports = Box;
