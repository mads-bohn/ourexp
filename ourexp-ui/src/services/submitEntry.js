import axios from "axios";

function submitEntry(title, text, feelings) {
    axios.post('http://localhost:8080/entry', {
        "title": title,
        "text": text,
        "feelings": feelings
      })
}

export { submitEntry };