import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='QA' caption='R-Tech' className='logobg'/>
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 11 am to 6 pm
              </span>
              <br />
              <br />
              <h3>281-407-1414 </h3>
              <br />
              <Link href="/contact">
              <button className='button-primary'>Request for quote</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services/1'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/services/2'>Quality Assurance</Link>
              </li>
              <li>
                <Link href='/services/4'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services/3'> E-Commerce</Link>
              </li>
              <li>
                <Link href='/services/5'> UX/UI Design</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/people/R-Tech-QA-USA-Inc/100094175331666/' target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/r-tech-qa-pakistan' target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 R-TECHQA. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>R-TECHQA</span>
              <span> &nbsp; | &nbsp; </span>
              <Link href="/"><span>TERMS & CONDITIONS</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
