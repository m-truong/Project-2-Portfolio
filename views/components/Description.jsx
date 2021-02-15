const React = require("react");

class Description extends React.Component {
  render() {
    return (
        <div className="description-card"> 
            <h1> Hi, I'm Mike ~</h1>
            <p> <i className="fas fa-home fa-lg"></i> Living in Boston, MA </p>
        </div>
    );
  }
}

module.exports = Description;
