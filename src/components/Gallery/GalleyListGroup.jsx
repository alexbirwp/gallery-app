import { Row } from "react-bootstrap";
import GalleyListItem from "./GalleyListItem";

const GalleyListGroup = ({items = [], title}) => {
    return (
        <section className="mb-5">
            <h3>{title}</h3>
            <Row>
                {items.map(item => 
                <GalleyListItem key={item.id} item={item}/>)}
            </Row>
        </section>
    )
};


export default GalleyListGroup;