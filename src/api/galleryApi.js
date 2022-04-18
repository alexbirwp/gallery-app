import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

export async function getGalleryGroups() {
    const groupsSize = 4;
    const groupSize = 6;

    const {data : items} = await axios.get(BASE_URL);
    const groups = [];
    let currentGroupIndex = 0;
    for (let i = 0; i < groupsSize * groupSize; i++) {
        const item = items[i];
        if(!groups[currentGroupIndex]) {
            groups[currentGroupIndex] = {
                id: currentGroupIndex,
                title: item.title,
                items: []
            };
        }
        groups[currentGroupIndex].items.push(item)
        if (groups[currentGroupIndex].items.length === groupSize) {
            currentGroupIndex++
        }
    }
    return groups;
}

export async function getGalleryItem(id) {
    const url = `${BASE_URL}/${id}`;
    const { data } = await axios.get(url);
    return data;
}