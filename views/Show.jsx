import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");


class Show extends React.Component {
  render() {
    const project = this.props.project;
    return (
      <Layout title={project.title}>
        <main>
          <Container>
            <Row className="justify-content-md-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <hr/>
                  <Card.Text className="card-text">
                    {project.description}
                  </Card.Text>
                  <hr />
                  <Button href="" variant="primary">
                    Edit Project
                  </Button>
                  <hr />
                  <Button href="" variant="info">
                    Delete Project
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </main>
      </Layout>
    );
  }
}

exports = Show;