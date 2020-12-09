import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";

const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' data: fonts.gstatic.com;"/> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Michael Truong Full Stack Web Developer</title>
          {/* GoogleFonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta&display=swap"
            rel="stylesheet"
          ></link>
          
          {/* Bootstrap */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          ></link>
          {/* CSS Stylesheet */}
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              Michael Truong Full Stack Web Developer
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="">Index</NavDropdown.Item>
                  <NavDropdown.Item href="">Create</NavDropdown.Item>
                  <NavDropdown.Item href="">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <header>
            <h1 id="" className="">
              {/* Michael Truong Full Stack Web Developer */}
              {this.props.title}
            </h1>
          </header>
          {this.props.children}
          <footer> copyright Michael Truong </footer>
          {/* Scripts */}
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
