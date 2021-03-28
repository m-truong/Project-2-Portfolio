// 1. TODO: change database to have strings of FA icons
// 2. TODO: change font styling of headers

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout");

class ProjectPage extends React.Component {
  render() {
    return (
      <Layout title="My Projects">
        <header id="" className="project-index-header">
          {/* <a href="/projects/new">Add Portfolio Project</a>  */}
        </header>

        <main>
          <Container>
            <Row className="justify-content-between align-content-between">
              {this.props.projects.map((project, i) => {
                return (
                  <Card className="card-border" style={{ width: "30rem" }}>
                    {/* <a href={`/projects/${project._id}`}> */}
                    <Card.Img variant="top" src={project.image} /> {/* </a> */}
                    <Card.Body>
                      <Card.Title className="title-text-size">
                        {project.title}
                      </Card.Title>
                      {/* <Card.Text className="card-text">
                        {project.description}
                      </Card.Text> */}

                      {/* Attempt .map and .split to display FA icons */}
                      <div className="languages-div">
                        {project.languages.split("/").map((language, i) => {
                          return language[0] === "f" ? (
                            <span>
                              <i class={language}/>{" "}
                            </span>
                          ) : (
                            <span className="languages">{language} |</span>
                          );
                        })}
                      </div>

                      <br />
                      <Button
                        className="button-style"
                        href={`/projects/${project._id}`}
                        variant="primary"
                      >
                        <i class="fas fa-info-circle" /> Project Info
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
