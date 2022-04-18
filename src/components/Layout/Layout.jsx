import { Container } from "react-bootstrap";
import HeaderNavbar from "./HeaderNavbar";

const Layout = ({children}) => {
    return (
        <>
            <HeaderNavbar />
            <main>
                <Container className="pt-10">
                    {children}
                </Container>
            </main>
        </>
    );
};


export default Layout;