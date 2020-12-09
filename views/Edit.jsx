import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Edit extends React.Component {
  render() {

    // const { name, readyToEat, color, _id } = this.props.project;

    return (
      <Layout title={`Edit ${this.props.project.name.toUpperCase()} Page`}>
        <main>
          <Container>
            <Row className="justify-content-center">
              <Form action={`/projects/${this.props.project._id}?_method=PUT`} method="POST" role="form">
                <Form.Group as={Col} controlId="">
                  <Form.Label>Project Title</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Enter project name"
                    defaultValue={this.props.project.name}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Enter project description"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="">
                  <Form.Label>Project Github</Form.Label>
                  <Form.Control
                    name="github"
                    type="text"
                    placeholder="Enter project github link"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="">
                  <Form.Label>Project Image</Form.Label>
                  <Form.Control
                    name="image"
                    type="text"
                    placeholder="Enter project image"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Changes
                </Button>
              </Form>
            </Row>
          </Container>
        </main>
      </Layout>
    );
  }
}

module.exports = Edit;