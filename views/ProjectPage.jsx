import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./Components/Layout.jsx");

class ProjectPage extends React.Component {
  render() {
    return (
      <Layout title="My Apps">
        <header id="" className="project-index-header">
          {/* <a href="/projects/new">Add Portfolio Project</a>  */}
        </header>

        <main>
          <Container>
            <Row className="justify-content-between align-content-between">
              {this.props.projects.map((project, i) => {
                return (
                  <Card className="card-border" style={{ width: "18rem" }}>
                    {/* <a href={`/projects/${project._id}`}> */}
                    <Card.Img variant="top" src={project.image} /> {/* </a> */}
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      {/* <Card.Text className="card-text">
                        {project.description}
                      </Card.Text> */}
                      <Button
                        className="button-style"
                        href={`/projects/${project._id}`}
                        variant="primary"
                      >
                       <i class="fas fa-info-circle"></i> Project Info
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

module.exports = ProjectPage;
