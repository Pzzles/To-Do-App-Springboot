import { readAll } from "../services/notes.service";
import { useEffect, useState } from "react";


const Notez = () => {
    
     const [notes, setNotes] = useState([]);

    useEffect(() => {
        readAll()
        .then(response => {
            console.log(`Received rresponse from API ${response.data}`);
            setNotes(response.data);
        }).catch(error => {
            console.log(`Error occured ${error}`);
        })
    }, []);

    return (
        <table border = {1}>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Category</th>
                <th>Status</th>
                <th>Urgency</th>
            </tr>
            {
                notes.map(note => (
                    <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>{note.body}</td>
                        <td>{note.category}</td>
                        <td>{note.status}</td>
                        <td>{note.urgency}</td>
                    </tr>
                ))
            }
              </tbody>

        </table>
        
    );
}

export default Notez;