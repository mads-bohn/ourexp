import axios from "axios";

async function getEntriesByFeeling(id) {

    try {
        const result = await axios.get(`localhost:8080/entry/feeling/${id}`);
        return result.data;
    } catch (error) {
        console.error('Error fetching entries by feeling:', error);
        return {};
    }
    
}

export { getEntriesByFeeling };

