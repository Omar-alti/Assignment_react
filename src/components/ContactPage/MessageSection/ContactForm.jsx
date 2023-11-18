import { Formik, Form, Field, ErrorMessage } from 'formik'//importerar Formik
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required("Recuired").min(2),
        email: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "Invalid email format").required("Recuired"),
        message: Yup.string().required("Recuired").min(10).max(1000)
    });

    const initialValues = { name: "", email: "", message: "" };

    const onSubmit = async (values, {resetForm}) => {
        const URL = "https://win23-assignment.azurewebsites.net/api/contactform";

        try {
            const options = {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            }

            const response = await fetch(URL, options);

            if (response.status === 200) {    
                setSuccess(true);
                resetForm({values: ""})
            }
        } catch (e) { console.warn("Något gick fel: " + e) }  
    };

    useEffect(() => {
       const timer=  setTimeout(() => {
            setSuccess(false);
        }, 3000);
    
        return () => {
            clearTimeout(timer);
          }
      }, [success]);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form noValidate>
                <div className="form-field">
                    <div className='error'><ErrorMessage name="name" component="div" /></div>

                    {<div>{success ? <div className="success" >Meddelandet skickat!</div> : ""}</div>}

                    <Field
                        type="text" name="name" id="name" placeholder="Name*" tabIndex="1" />
                </div>

                <div className="form-field">
                    <div className='error'><ErrorMessage name="email" /></div>
                    <Field
                        type="email" name="email" id="email" placeholder="Email*" tabIndex="2" />
                </div>

                <div className="form-field">
                    <div className='error'><ErrorMessage name="message" component="div" /></div>

                    <Field as="textarea"
                        type="text" name="message" id="message" placeholder="Your Message*" cols="30" rows="10" tabIndex="3"></Field>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={false} tabIndex="4">Send message<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </Form>
        </Formik >
    )
}

export default ContactForm