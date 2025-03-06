import axios from "axios";

function editEntry(id, title, text, feelings) {
    axios.post('http://localhost:8080/entry', {
        "id": id,
        "title": title,
        "text": text,
        "feelings": feelings
      })
}

export { editEntry };