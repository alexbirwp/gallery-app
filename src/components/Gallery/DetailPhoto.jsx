import { Col, Image, ListGroup, Row } from "react-bootstrap";

const DetailPhoto = (props) => {
    const {title, url} = props;
    return (
        <Row className="mt-3">
            <Col md={3} lg={5}>
                <Image 
                className="mb-3"
                src={url} 
                title={title}
                fluid={true} />
            </Col>
            <Col>
                <ListGroup>
                    {Object.keys(props).map(propName => 
                    <ListGroup.Item>
                        {propName} : {props[propName]}
                    </ListGroup.Item>)}
                </ListGroup>
            </Col>
        </Row>
    )
};


export default DetailPhoto;