import { Navbar, Nav, Container, Col, Row, Button } from "react-bootstrap";
const React = require("react");
const Layout = require("./components/Layout");
const PhotoCard = require("./components/PhotoCard");
const Description = require("./components/Description");
const Skills = require("./components/Skills");

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
