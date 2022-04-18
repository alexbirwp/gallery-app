import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import DetailPhoto from "../components/Gallery/DetailPhoto";
import Preloader from "../components/Layout/Preloader";
import { fetchItem } from "../store/itemReduser";

const PhotoDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {item, loading} = useSelector(state => state.item);
    const isLoading = (item === null) || loading || (item.id !== +id);
    useEffect(() => {
        isLoading && dispatch(fetchItem(id))
    }, [isLoading, dispatch, id])

    return (
        <>
        <LinkContainer to='/'>
            <Button>Назад</Button>
        </LinkContainer>
        {isLoading && <Preloader />}
        {!isLoading && <DetailPhoto {...item} />}
        </>
    )
};


export default PhotoDetails;