import axios from "axios";

function deleteEntry(id) {
    axios.delete(`http://localhost:8080/entry/${id}`);
}

export { deleteEntry };