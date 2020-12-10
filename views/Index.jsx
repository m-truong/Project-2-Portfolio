import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Project Index Page">
        
        <header id="" className="project-index-header">
          <a href="/projects/new">Add Portfolio Project</a>
        </header>

        <main>
          <Container>
            <Row className="justify-content-around">
              {this.props.projects.map((project, i) => {
                return (
                  <Card className="card-border" style={{ width: "18rem" }}>
                    <a href={`/projects/${project._id}`}>
                      <Card.Img variant="top" src={project.image} />{" "}
                    </a>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text className="card-text">
                        {project.description}
                      </Card.Text>
                      <Button
                        href={`/projects/${project._id}`}
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
