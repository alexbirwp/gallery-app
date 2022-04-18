import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AboutMeSection from "./AboutMeSection";

const MainMenu = () => {
    return (
        <>
            <Navbar.Toggle aria-controls="mainMenu" />
            <Navbar.Offcanvas
                id="mainMenu"
                aria-labelledby="mainMenuLabel"
                placement="start"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="mainMenuLabel">Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Галлерея</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>Обо мне</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <AboutMeSection />
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    );
};


export default MainMenu;