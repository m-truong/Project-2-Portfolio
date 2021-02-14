import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// import React, { useState, useEffect, useContext } from "react"

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  // const [state, stateHandler] = useState([]); 
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
                      <Card.Img variant="top" src={project.image} />{" "}
                    {/* </a> */}
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text className="card-text">
                        {project.description}
                      </Card.Text>
                      {/* <Button
                        href={`/projects/${project._id}`}
                        variant="primary"
                      >
                        Show Project Page
                      </Button> */}
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
