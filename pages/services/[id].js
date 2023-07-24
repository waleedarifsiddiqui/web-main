import { blogdata, expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import img from '../../public/images/e2.jpg'
const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = expertise.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>Web Development</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            {/* <TitleSm title='' /> <br /> */}
            {/* <br /> */}
            <Title title="Web Development" className='title-bg' />
            <div className='img py'>
              <img src={img} alt="" width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Our organization strives to stay ahead of the curve in the constantly evolving field of web development.' />
              <p className='desc-p'>We take great pride in delivering customized web development services tailored to meet the unique needs of our clients. Our team is composed of highly skilled developers who use the latest technology and best practices to transform your vision into a reality. It entails creating an intuitive, secure, and functional website utilizing many technologies and programming languages such as HTML, CSS, JavaScript and React.</p>
              <p className='desc-p'>From designing captivating interfaces that reflect brand identity to integrating robust functionalities into every corner of a website's architecture; they leave no stone unturned in providing impeccable end-to-end solutions that resonate with client objectives – rendering null room for dissatisfaction or compromise.</p>
              <p className='desc-p'>We understand that each organization has distinct requirements, so we create websites that not only reflect your identity, but also deliver seamless functionality and an exceptional user experience. We are committed to providing rigorous planning, flawless execution, and continuous communication with our clients, ensuring that each project receives our undivided attention from start to finish</p>
              <p className='desc-p'>We understand that each organization has distinct requirements, so we create websites that not only reflect your identity, but also deliver seamless functionality and an exceptional user experience. We are committed to providing rigorous planning, flawless execution, and continuous communication with our clients, ensuring that each project receives our undivided attention from start to finish.</p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            {/* <div className='desc'>
              <TitleSm title="For more information on how our bespoke web development services may elevate your online presence, get in touch with us right away." />

              
              
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
