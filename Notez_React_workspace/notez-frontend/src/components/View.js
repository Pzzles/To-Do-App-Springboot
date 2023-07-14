import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readNote } from "../services/notes.service";


const View = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [urgency, setUrgency] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    
    
    
    const getNoteById = async () => {
        try{
              const response = await readNote(id);
              const existingNote = response.data;

              setTitle(existingNote.title);
              setBody(existingNote.body);
              setCategory(existingNote.category);
              setUrgency(existingNote.urgency);
              setUpdatedAt(existingNote.updatedAt);

        }catch(error){
            console.error("Error occurred while retrieving data from API");
        }
    }
    useEffect(() => {
        getNoteById(id);
    }, [id]);
    return ( 
            <div>        
                <div>
                    <h1>Note details</h1>
                    <hr/>
                    <h2>{title}</h2>
                    <p>Posted on {new Date(updatedAt).toDateString()} by Pule Tshetlha</p>
                    <span>{category}</span>
                    <span>{urgency}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} ></div>
            </div>
     );
}
 
export default View;




// import { readAll } from "../services/notes.service";
// import { useEffect, useState } from "react";


// const View = () => {
    
//      const [notes, setNotes] = useState([]);

//     
//         
//         .then(response => {
//             console.log(`Received rresponse from API ${response.data}`);
//             setNotes(response.data);
//         }).catch(error => {
//             console.log(`Error occured ${error}`);
//         })
//     }, []);

//     return (
//         <table border = {1}>
//             <tbody>
//             <tr>
//                 <th>Title</th>
//                 <th>Body</th>
//                 <th>Category</th>
//                 <th>Status</th>
//                 <th>Urgency</th>
//             </tr>
//             {
//                 notes.map(note => (
//                     <tr key={note.id}>
//                         <td>{note.title}</td>
//                         <td>{note.body}</td>
//                         <td>{note.category}</td>
//                         <td>{note.status}</td>
//                         <td>{note.urgency}</td>
//                     </tr>
//                 ))
//             }
//               </tbody>

//         </table>
        
//     );
// }

// export default Notez;