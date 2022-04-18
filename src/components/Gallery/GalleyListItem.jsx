import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const GalleyListItem = ({item}) => {
    const {thumbnailUrl, id} = item;
    return  (
        <Col md={4} lg={2}>
            <Card>
                <Card.Img 
                src={thumbnailUrl} />
                <Card.ImgOverlay 
                className="d-flex justify-content-center align-items-center">
                    <LinkContainer to={`/${id}`}>
                        <Button>Подробнее</Button>
                    </LinkContainer>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
};


export default GalleyListItem;