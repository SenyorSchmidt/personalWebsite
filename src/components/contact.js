import React from "react"
import { useLanguage } from "../context/languageProvider"
import { Formik, useFormik, Form, Field, validateYupSchema } from "formik";
import { useDarkmode } from "../context/modeProvider";
import * as Yup from 'yup';


// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)
// ** TODO: Implement EmailJS

/*                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={formik.values.name}
                        {...formik.getFieldProps("name")}
                        
                    ></input>
                    <label htmlFor="email">E-Mail</label>
                    <input></input>

                    <label htmlFor="subject">Subject</label>
                    <input></input>

                    <label htmlFor="message">Message</label>
                    <input></input>

                    <button className="submitButton">Submit</button>
                </form>*/

const formikMessage = {
    en:
        [
            "Please type in your name",
            "Please type in your e-mail adress",
            "Invalid email",
            "Please type in the subject",
            "Please type in your request",
            "Has to contain at least 25 characters"
        ],
    ger:
        [
            "Bitte gb deinen Namen an",
            "Bitte gib eine E-Mailadresse an",
            "Ungültige E-Mailadresse",
            "Bitte gib einen Betreff an",
            "Bitte gib deine Anfrage ein",
            "Muss mindestens 25 zeichen enthalten"
        ]
}

const header = {
    en: "CONTACT",
    ger: "KONTAKT"
}

const Contact = () => {

    const { language } = useLanguage()
    const { darkmode } = useDarkmode()


    const handleSubmit = (e) => {
        e.preventDefault();

        {/*const templateParams = {
            from_name: formik.values.firstName,
            from_email: formik.values.email,
            subject: formik.values.subject,
            to_name: "Waldemar",
            message: formik.values.message
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(() => {
            swal("Danke für deine Anfrage!", "Ich melde mich demnächst bei dir.", "success");
            formik.resetForm()
        }).catch((error) => {
            swal("Es ist ein Fehler aufgetreten!", "Versuche es bitte erneut.", "error")
        })*/}
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(formikMessage[language][0]),
        email: Yup.string().required(formikMessage[language][1]).email(formikMessage[language][2]),
        subject: Yup.string().required(formikMessage[language][3]),
        comment: Yup.string().required(formikMessage[language][4]).min(25, formikMessage[language][5])
    })

    const initialValues = {
        name: "Enter your name",
        email: "",
        subject: "",
        message: ""
    }

    return (
        <div className="container" id={header[language]}>
            {/** TODO: FIND WAY TO MAKE FORMIK WORK WITHOUT CHAKRAUI
            */}
            <h1 className={`h1${darkmode ? "Dark" : "Light"}`} id={header[language]}>
                {header[language]}
            </h1>
            <div className={`contactForm${darkmode ? "Dark" : "Light"}`}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}>
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div className="errorMessage">{errors.name}</div>
                            ) : null}
                            <Field name="email" />
                            {errors.email && touched.email ? (
                                <div className="errorMessage">{errors.email}</div>
                            ) : null}
                            <Field name="subject" />
                            {errors.subject && touched.subject ? (
                                <div className="errorMessage">{errors.subject}</div>
                            ) : null}
                            <Field name="comment" />
                            {errors.comment && touched.comment ? (
                                <div className="errorMessage">{errors.comment}</div>
                            ) : null}
                            <button type="submit" className="submitButton">Submit</button>
                        </Form>)}
                </Formik>
            </div>
        </div>
    )
}

export default Contact