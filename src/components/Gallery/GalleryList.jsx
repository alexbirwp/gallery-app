import GalleyListGroup from "./GalleyListGroup";

const GalleyList = ({groups}) => {
    return (
        <>
            {groups.map(group => 
            <GalleyListGroup 
            key={group.id} 
            title={group.title}
            items={group.items} />)}
        </>
    )
};


export default GalleyList;
