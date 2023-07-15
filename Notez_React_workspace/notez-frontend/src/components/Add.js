import {Formik, Form, Field} from "formik";
import {Editor} from "@tinymce/tinymce-react";
import * as applicationConstants from "../util/ApplicationConstants";
import { readNote, saveNotes, updateNote } from "../services/notes.service";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Add = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [urgency, setUrgency] = useState('');
    const [autoIncrementId, setAutoIncrementId] = useState(null);

    const handleSubmit = async (values) => {

        let response = null;
        if(values.id){
            response = await updateNote(values);
        }else{
            response = await saveNotes(values);
        }

        if(!response){
            throw Error('Error! Cannot store in database');
        }

        console.log(`Printing response object ${response.data}`);
    
        navigate("/");
    }

    const getNoteById = async () => {
        try{
              const response = await readNote(id);
              const existingNote = response.data;

              setTitle(existingNote.title);
              setBody(existingNote.body);
              setCategory(existingNote.category);
              setUrgency(existingNote.urgency);
              setAutoIncrementId(existingNote.id)

        }catch(error){
            console.error("Error occurred while retrieving data from API");
        }
    }

    useEffect(() => {
        if(id){
            getNoteById(id);
        }
    })

    return ( 
        <div>
            <h1>Add new Note</h1>
            <Formik 
            initialValues=
            {
                {
                    title: title,
                    body: body,
                    category: category,
                    urgency: urgency,
                    id: autoIncrementId
                }
            }
            enableReinitialize
            onSubmit={handleSubmit}
            >
                <Form>
                    <Field id="id" name="id" type="hidden"></Field>
                    <label>Title</label>
                    <Field placehlder= "Enter title " name="title">

                    </Field>
                    <label>Body</label>
                    <Field placehlder= "Enter description " name="description">
                        {({ form }) => {
                            const {setFieldValue} = form;
                            return(
                                <>
                                    <Editor
                                        apiKey= {applicationConstants.tinymce_api_key}
                                        value={form.values.body}
                                        init={{
                                            height: 500,
                                            menubar: true,
                                            plugins: ["image", "code", "table", "link", "media", "codesample"],
                                            toolbar:
                                                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticone charmap | removeformat | formatselect | bold italic backcolor | alignleft alignright alignjustify | bullist numlist | help",

                                            content_style:
                                            "body { font-family: Helvetica, Arial, sans-serif }"
                                        }}

                                        onEditorChange={(content ) => {
                                            setFieldValue('body', content);
                                        }}
                                        />
                            </>
                            )
                        }}
                    </Field>
                    <label>Category</label>npm
                    <Field  placehlder= "Enter category" name="category">

                    </Field>
                    <label>Status</label>
                    <Field  placehlder= "Enter Status" name="Status">

                    </Field>
                    <label>Urgency</label>
                    <Field  placehlder= "Enter Urgency" name="Urgency">

                    </Field>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <Link to='/mynotes'>Back To Notes</Link>
        </div>
     );
}
 
export default Add
