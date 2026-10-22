import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          🍽️ Food Recipe App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="recipe-navbar" />

        <Navbar.Collapse id="recipe-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#recipes">Recipes</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;