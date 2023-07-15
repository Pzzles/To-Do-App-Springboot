import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { readNote, deleteNote } from "../services/notes.service";


const View = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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

    const deleteOne = async () =>{
        try{
            await deleteNote(id);
            navigate("/mynotes");
        }catch(error){
            console.error('Cannot delete note.');
        }
    }


    useEffect(() => {
        if(id){
            getNoteById(id);
        }
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
                <button onClick={deleteNote}>Delete</button>
                <Link to={`/editnote/${id}`}>Edit</Link>
                <Link to="/mynotes">Back To Notes</Link>
            </div>
     );
}
 
export default View;
