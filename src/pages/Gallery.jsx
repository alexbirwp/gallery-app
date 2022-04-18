import { useEffect, useState } from "react";
import { getGalleryGroups } from "../api/galleryApi";
import GalleyList from "../components/Gallery/GalleryList";
import Preloader from "../components/Layout/Preloader";

const Gallery = () => {
    const [groups, setGroups] = useState([]);   
    const [isLoading, setIsLoading] = useState(true) 
    useEffect(() => {
        getGalleryGroups().then(data => {
            setTimeout(() => {
                setGroups(data);
                setIsLoading(false);
            }, 500)
        })
    }, [])
    return (
        <>
        <h1>Галлерея</h1>
        {isLoading && <Preloader />}
        {!isLoading && <GalleyList groups={groups}/>}
        </>
    )
};


export default Gallery;