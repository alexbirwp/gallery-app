import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { getGalleryItem } from "../api/galleryApi";

const PhotoDetails = () => {
    const params = useParams();
    getGalleryItem(params.id)
    return (
        <>
        <LinkContainer to='/'>
            <Button>Назад</Button>
        </LinkContainer>
        <h1>{params.id}</h1>
        </>
    )
};


export default PhotoDetails;