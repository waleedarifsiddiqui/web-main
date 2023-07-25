import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <Link href="https://web-main-eight.vercel.app/contact">
            <button className='button-primary'>Request a call-back</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Banner
