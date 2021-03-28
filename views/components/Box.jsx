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
        {properties.languages && properties.description ? (
          <>
            <div className="built-with-div">
              <span>Built using: </span>
              <br />
              <div className="languages-left-align">
                {properties.languages.split("/").map((language, i) => {
                  return language[0] === "f" ? (
                    <span>
                      <i class={language} />{" "}
                    </span>
                  ) : (
                    <span className="languages">{language} |</span>
                  );
                })}{" "}
              </div>
            </div>

            {properties.description.split("/").map((descrip, i) => {
              return <p className="left add-padding">{descrip}</p>;
            })}
            {/* <hr />
            <h4 className="proudest-style">Proudest Accomplishments:</h4> */}
          </>
        ) : (
          <hr />
        )}
        {properties.paragraph ? <p className="blog-paragraph">{properties.paragraph}</p> : ""}
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
