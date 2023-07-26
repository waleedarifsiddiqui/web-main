import emailjs from "@emailjs/browser";
import Link from "next/link";

import { Title, TitleSm } from "@/components/common/Title";
import { useRef } from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useFormik } from "formik";
import { signUpSchema } from "@/schemas";
import { toast } from "react-hot-toast";

const initialValues = {
  user_name: "",
  email: "",
  budget: "",
  time: "",
  message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
    console.log(
      "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
      errors
    );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    handleSubmit();

    emailjs
      .sendForm(
        "service_q3kbgin",
        "template_wumoakb",
        form.current,
        "xzVT1h7u_hXCEJqEJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Form successfully submitted!')
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 11:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Karachi</h3>
                  <span>
                    Office No. 303, Badar Commercial Street 7A Plot No. 51,
                    Phase V South, Karachi, 75500, Pakistan
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@email.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@email.com</h3>
                  <span>Career at R-TechQA</span>
                </div>
              </div>
              <ul>
                <h3>CONNECT</h3>
                <li>
                  <Link
                    className="icon"
                    href="https://www.facebook.com/people/R-Tech-QA-USA-Inc/100094175331666/"
                    target="_blank"
                  >
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link className="icon" href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link className="icon" href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link
                    className="icon"
                    href="https://www.linkedin.com/company/r-tech-qa-pakistan"
                    target="_blank"
                  >
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <div className="grid-2">
                  <div className="inputs">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      placeholder="Enter your name"
                      value={values.user_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.user_name && errors.user_name ? (
                      <p className="form-error">{errors.user_name}</p>
                    ) : null}
                  </div>
                  <div className="inputs">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="random@email.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget*</span>
                    <input
                      type="text"
                      id="budget"
                      value={values.budget}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.budget && touched.budget ? (
                      <p className="form-error">{errors.budget}</p>
                    ) : null}
                  </div>
                  <div className="inputs">
                    <span>timeframe*</span>
                    <input
                      type="text"
                      id="time"
                      value={values.time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.time && touched.time ? (
                      <p className="form-error">{errors.time}</p>
                    ) : null}
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  {errors.message && touched.message ? (
                    <p className="form-error">{errors.message}</p>
                  ) : null}
                </div>
                <button type="submit" value="Send" className="button-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
