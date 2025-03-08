import axios from "axios";

function editEntry(id, title, text, feelings) {
    return axios.post('http://localhost:8080/entry', {
        "id": id,
        "title": title,
        "text": text,
        "feelings": feelings
      })
}

export { editEntry };