import { Navbar, Nav, Container, Col, Row, Button } from "react-bootstrap";
const React = require("react");
const Layout = require("./Components/Layout.jsx");
const PhotoCard = require("./Components/PhotoCard.jsx");
const Description = require("./Components/Description.jsx");
const Skills = require("./Components/Skills.jsx");

class HomePage extends React.Component {
  render() {
    return (
      // Don't use fluid (causes container to span entire width of viewport)
      <Layout title="Welcome -">
        <Container>
          <Row className="top-buffer">
            <Col md={4}>
              <PhotoCard />
            </Col>
            <Col md={8}>
              <Description />
            </Col>
          </Row>
          <Row className="top-buffer">
            <Col className="offset-md-4" md={8}>
              <Skills />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

module.exports = HomePage;
