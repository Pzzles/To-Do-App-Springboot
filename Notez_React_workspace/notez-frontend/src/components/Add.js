import {Formik, Form, Field} from "formik";
import {Editor} from "@tinymce/tinymce-react";

const Add = () => {
    const handleSubmit = (values) => {
        console.log('Form values', values);
    }
    return ( 
        <div>
            <h1>Add new Note</h1>
            <Formik 
            initialValues=
            {
                {
                    title: '',
                    body: '',
                    category: '',
                    status: '',
                    urgency: ''
                }
            }
            enableReinitialize
            onSubmit={handleSubmit}
            >
                <Form>
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
                                        apiKey="nbdslexcqp4iy5dcsyg6n6m6p6efhq4sypszl5berku63eqw"
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
        </div>
     );
}
 
export default Add
