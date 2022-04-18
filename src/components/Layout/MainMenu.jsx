import { useState } from "react";
import { Navbar, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AboutMeSection from "./AboutMeSection";

const MainMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar.Toggle 
            onClick={handleShow}/>
            <Navbar.Offcanvas
                placement="start"
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav>
                        <LinkContainer to="/" onClick={handleClose}>
                            <Nav.Link>Галлерея</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" onClick={handleClose}>
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