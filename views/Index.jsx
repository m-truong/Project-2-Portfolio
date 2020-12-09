import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    console.log(this.props.projects);
    return (
      //   <AppLayout
      //     title="Projects Index Page*"
      //     stylesheet="/style.css"
      //     js="/index.js"
      <Layout
        title="~Project Index Page~"
        // stylesheet="/style.css"
        // js="/index.js"
      >
        <header id="" className="project-index-header"></header>

        <main>
          <Container>
            <Row className="justify-content-around">
              {this.props.projects.map((project, i) => {
                return (
                  <Card className="card-border" style={{ width: "18rem" }}>
                    <a href={`/projects/${project._id}`}>
                      <Card.Img variant="top" src={project.img} />{" "}
                    </a>
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text className="card-text">
                        {project.description}
                      </Card.Text>
                      {/* <Card.Text></Card.Text> */}
                      <Button
                        href={`/project/${project._id}`}
                        variant="primary"
                      >
                        Show Project Page
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </Row>
          </Container>
        </main>
      </Layout>
    );
  }
}

module.exports = Index;