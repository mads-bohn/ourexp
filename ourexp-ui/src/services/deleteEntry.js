import axios from "axios";

function deleteEntry(id) {
    return axios.delete(`http://localhost:8080/entry/${id}`);
}

export { deleteEntry };