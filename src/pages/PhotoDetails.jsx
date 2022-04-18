import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { getGalleryItem } from "../api/galleryApi";

const PhotoDetails = () => {
    const {id} = useParams();

    return (
        <>
        <LinkContainer to='/'>
            <Button>Назад</Button>
        </LinkContainer>
        
        </>
    )
};


export default PhotoDetails;