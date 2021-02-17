import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./Components/Layout.jsx");

class BlogPage extends React.Component {
  render() {
    return (
      <Layout title="">
        <header id="" className="blog-index-header">
          {/* <a href="/blogs/new">Add Portfolio Blog</a>  */}
        </header>

        <main>
          <Container>
            <Row className="justify-content-between align-content-between">
              {this.props.blogs.map((blog, i) => {
                return (
                  <Card className="card-border" style={{ width: "18rem" }}>
                    {/* <a href={`/blogs/${blog._id}`}> */}
                    <Card.Img variant="top" src={blog.image} /> {/* </a> */}
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Title>{blog.date}</Card.Title>
                      {/* <Card.Text className="card-text">
                        {blog.description}
                      </Card.Text> */}
                      <Button className="button-style" href={`/blogs/${blog._id}`} variant="primary">
                      <i class="fas fa-align-left"></i> Show blog Page
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

module.exports = BlogPage;
