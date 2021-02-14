import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title> Michael Truong | Software Engineer </title>
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
            <Navbar.Brand href="/">#Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="/about">About</Nav.Link> */}
                {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                <Nav.Link href="/projects">#Projects</Nav.Link>
                <Nav.Link href="/blog">#CodeJournal</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <header>
            <h1 id="" className="">
              {this.props.title}
            </h1>
          </header>
          {this.props.children}
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