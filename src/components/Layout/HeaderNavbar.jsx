import { Container, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import MainMenu from "./MainMenu";

const HeaderNavbar = ({children}) => {
    return (
    <Navbar bg="light" expand={false} fixed="top">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Галлерея изображений</Navbar.Brand>
            </LinkContainer>
            <MainMenu />
        </Container>
    </Navbar>
    );
};


export default HeaderNavbar;