import { Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from './GalleyListItem.module.css'

const GalleyListItem = ({item}) => {
    const {thumbnailUrl, id} = item;
    const imgOverlayClassName = `${styles['custom-overlay']} justify-content-center align-items-center`;
    return  (
        <Col xs={6} md={4} lg={2} className="mb-4">
            <Card className={styles['custom-card']}>
                <Card.Img 
                src={thumbnailUrl} />
                <Card.ImgOverlay 
                className={imgOverlayClassName}>
                    <LinkContainer to={`/${id}`}>
                        <Button>Подробнее</Button>
                    </LinkContainer>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
};


export default GalleyListItem;