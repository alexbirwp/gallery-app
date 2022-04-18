import { Container } from "react-bootstrap";
import HeaderNavbar from "./HeaderNavbar";

const Layout = ({children}) => {
    return (
        <>
            <HeaderNavbar />
            <main>
                <Container className="mt-5 pt-5">
                    {children}
                </Container>
            </main>
        </>
    );
};


export default Layout;