import { useEffect, useState } from "react";
import { getGalleryGroups } from "../api/galleryApi";
import GalleyList from "../components/Gallery/GalleryList";

const Gallery = () => {
    const [groups, setGroups] = useState([]);    
    useEffect(() => {
        getGalleryGroups().then(setGroups)
    }, [])
    return (
        <>
        <h1>Галлерея</h1>
        <GalleyList groups={groups}/>
        </>
    )
};


export default Gallery;