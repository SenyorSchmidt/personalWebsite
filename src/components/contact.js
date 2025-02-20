import React from "react"
import { useLanguage } from "../context/languageProvider"
import { Formik, useFormik, Form, Field, validateYupSchema } from "formik";
import { useDarkmode } from "../context/modeProvider";
import * as Yup from 'yup';


// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)
// ** TODO: Implement EmailJS
// ** TODO: Implement handleSubmit for submit button

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
            "Bitte gib deinen Namen an",
            "Bitte gib eine E-Mailadresse an",
            "Ungültige E-Mailadresse",
            "Bitte gib einen Betreff an",
            "Bitte gib deine Anfrage ein",
            "Muss mindestens 25 zeichen enthalten"
        ]
}

const labels = {
    en:
        [
            "Name",
            "Email",
            "Subject",
            "Message"
        ],
    ger:
        [
            "Name",
            "Emailadresse",
            "Betreff",
            "Nachricht"
        ]
}

const header = {
    en: "CONTACT",
    ger: "KONTAKT"
}

const Contact = () => {

    const { language } = useLanguage()
    const { darkmode } = useDarkmode()


    const handleSubmit = (values) => {
        console.log(values["name"])
        console.log(values["email"])
        console.log(values["subject"])
        console.log(values["message"])

        {const templateParams = {
            from_name:  values["name"],
            from_email: values["email"],
            subject: values["subject"],
            to_name: "Waldemar",
            message: values["message"]
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(() => {;
            formik.resetForm()
        }).catch((error) => {
            alert("Error")
        })}
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(formikMessage[language][0]),
        email: Yup.string().required(formikMessage[language][1]).email(formikMessage[language][2]),
        subject: Yup.string().required(formikMessage[language][3]),
        message: Yup.string().required(formikMessage[language][4]).min(25, formikMessage[language][5])
    })

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required(formikMessage[language][0]),
            email: Yup.string().required(formikMessage[language][1]).email(formikMessage[language][2]),
            subject: Yup.string().required(formikMessage[language][3]),
            message: Yup.string().required(formikMessage[language][4]).min(25, formikMessage[language][5])
        })
    });

    return (
        <div className="container" id={header[language]}>
            <h1 className={`h1${darkmode ? "Dark" : "Light"}`} id={header[language]}>
                {header[language]}
            </h1>
            <div className={`contactForm${darkmode ? "Dark" : "Light"}`}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {({ values, errors, touched }) => (
                        <Form>
                            <label htmlFor="name">{labels[language][0]}</label>
                            <Field name="name" />
                            {errors.name && touched.name ? (
                                <div className="errorMessage">{errors.name}</div>
                            ) : null}
                            <p>{values.name}</p>
                            <label htmlFor="email">{labels[language][1]}</label>
                            <Field name="email" />
                            {errors.email && touched.email ? (
                                <div className="errorMessage">{errors.email}</div>
                            ) : null}
                            <label htmlFor="subject">{labels[language][2]}</label>
                            <Field name="subject" />
                            {errors.subject && touched.subject ? (
                                <div className="errorMessage">{errors.subject}</div>
                            ) : null}
                            <label htmlFor="message">{labels[language][3]}</label>
                            <Field name="message" />
                            {errors.message && touched.message ? (
                                <div className="errorMessage">{errors.message}</div>
                            ) : null}
                            <button type="submit" className="submitButton">Submit</button>
                        </Form>)}
                </Formik>
            </div>
        </div>
    )
}

export default Contact