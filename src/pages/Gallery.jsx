import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleyList from "../components/Gallery/GalleryList";
import Preloader from "../components/Layout/Preloader";
import { fetchGroups } from "../store/groupsReduser";

const Gallery = () => {
    const {groups = [], loading} = useSelector(state => {
        return state.groups
    });
    console.log(loading)
    const dispatch = useDispatch()
    useEffect(() => {
        loading && dispatch(fetchGroups())
    }, [dispatch, loading])
    return (
        <>
        <h1>Галлерея</h1>
        {loading && <Preloader />}
        {!loading && <GalleyList groups={groups}/>}
        </>
    )
};


export default Gallery;