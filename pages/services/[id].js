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
            <Title title={post?.title} className='title-bg' />
            
            <div className='img py'>
            <img src={post?.cover} alt={post?.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title={post?.para6} />
              <p className='desc-p'>{post?.para1}</p>
              <p className='desc-p'>{post?.para2}</p>
              <p className='desc-p'>{post?.para3}</p>
              <p className='desc-p'>{post?.para4}</p>
              <p className='desc-p'>{post?.para5}</p>
              <p className='desc-p'>{post?.para7}</p>
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
