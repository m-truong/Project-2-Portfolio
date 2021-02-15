import { Navbar, Nav, Container, Col, Row, Button } from "react-bootstrap";
const React = require("react");
const Layout = require("./Components/Layout.jsx");
const PhotoCard = require("./Components/PhotoCard.jsx");
const Description = require("./Components/Description.jsx");

class HomePage extends React.Component {
  render() {
    return (
      <Layout title="Hi, I'm Mike -">
        <Container fluid>
          <Row>
            <Col md={3}>
              <PhotoCard />
            </Col>
            <Col md={9}>
              <Description />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

module.exports = HomePage;
