import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import { useRef } from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  const form = useRef()

  const sendEmail = () => {

  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 11:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Karachi</h3>
                  <span>Office No. 303, Badar Commercial Street 7A Plot No. 51, Phase V South, Karachi, 75500, Pakistan</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@email.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@email.com</h3>
                  <span>Career at R-TechQA</span>
                </div>
              </div>
              <ul>
              <h3>CONNECT</h3>
              <li >
                  <Link  className='icon' href='https://www.facebook.com/people/R-Tech-QA-USA-Inc/100094175331666/' target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link  className='icon' href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link  className='icon' href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link  className='icon' href='https://www.linkedin.com/company/r-tech-qa-pakistan' target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form ref={form} onSubmit={sendEmail}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' placeholder="Full Name" />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' placeholder="Email"/>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button type="submit" className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
