// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form"

// const React = require("react");
// const Layout = require("./Components/Layout.jsx");

// class Show extends React.Component {
//   render() {
//     const project = this.props.project;
//     return (
//       <Layout title={project.title}>
//         <main>
//           <Container>
//             <Row className="justify-content-md-center">
//               <Card className="card-border" style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={project.image} />
//                 <Card.Body>
//                   <Card.Title>{project.title}</Card.Title>
//                   <hr />
//                   <Card.Text className="card-text">
//                     {project.description}
//                   </Card.Text>
//                   <hr />
//                   <Button
//                     href={project.github}
//                     variant="primary" target="_blank"
//                   >
//                     Go to Github
//                   </Button>
//                   <hr />
//                   <Button
//                     href={project.heroku}
//                     variant="primary" target="_blank"
//                   >
//                     Go to Heroku
//                   </Button>
//                   <hr /> 
//                   <Button
//                     href={`/projects/${project._id}/edit`}
//                     variant="primary"
//                   >
//                     Edit Project
//                   </Button>
//                   <hr />
//                   <Form
//                     action={`/projects/${project._id}?_method=DELETE`}
//                     method="POST"
//                   >
//                     <Button type="submit" variant="info">
//                       Delete Project
//                     </Button>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Row>
//           </Container>
//         </main>
//       </Layout>
//     );
//   }
// }

// module.exports = Show;