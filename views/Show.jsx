import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const React = require("react");
const Layout = require("./Components/Layout.jsx");
const Box = require("./Components/Box.jsx");

class Show extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <Layout title={""}>
        <Container>
          <Row>
            <Col md={6}>
              <div className="box">
                <h1>Image Here</h1>
                <img className="image" src={item.image} alt="img" />
              </div>
            </Col>
            <Col md={6}>
              <h1>Project/Blog Here</h1>
              <Box item={item} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

module.exports = Show;

{
  /* <Container>
  <Row className="justify-content-md-center">
    <Card className="card-border" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Title>{item.date}</Card.Title>
        <hr />
        <Card.Text className="card-text">{item.description}</Card.Text>
        {item.github ? (
          <>
            <hr />
            <Button href={item.github} variant="primary" target="_blank">
              GitHub
            </Button>
            <hr />
            <Button href={item.heroku} variant="primary" target="_blank">
              Live App
            </Button>
            <hr />
          </>
        ) : (
          <hr />
        )}
      </Card.Body>
    </Card>
  </Row>
</Container>; */
}

{
  /* <Button
                    href={`/projects/${project._id}/edit`}
                    variant="primary"
                  >
                    Edit Project
                  </Button>
                  <hr /> */
}
{
  /* <Form
                    action={`/projects/${project._id}?_method=DELETE`}
                    method="POST"
                  >
                    <Button type="submit" variant="info">
                      Delete Project
                    </Button>
                  </Form> */
}
