const React = require("react");

class Box extends React.Component {
  render() {
    const properties = this.props.item;
    console.log(properties);
    return (
      <div className="">
        <h1>{properties.title}</h1>
        {properties.date ? <h3>{properties.date}</h3> : ""}
        <p>{properties.description}</p>
      </div>
    );
  }
}

module.exports = Box;
