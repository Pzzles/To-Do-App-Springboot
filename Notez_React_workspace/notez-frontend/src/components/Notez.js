import { Link } from "react-router-dom";
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
        <div>
            <Link to='/newnote'>New Note</Link>
            <table border = {1}>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Category</th>
                    <th>Urgency</th>
                    <th>Actions</th>
                </tr>
                {
                    notes.map(note => (
                        <tr key={note.id}>
                            <td>{note.title}</td>
                            <td>{note.body}</td>
                            <td>{note.category}</td>
                            <td>{note.urgency}</td>
                            <td>
                                <Link to={`/view/${note.id}`}>Edit</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
        
    );
}

export default Notez;