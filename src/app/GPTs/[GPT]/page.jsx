import React from 'react'
import Navbar from '../../components/Navbar'
import GPT from '../../components/GPT'
import { gpts } from '@/app/data'


const Page = ({params}) => {
console.log("params", params)
console.log("params", params.GPT)
  
  return (

    
    <>
    <Navbar/>
    <GPT id={params.GPT}/>

    </>
  )
}

export default Page

// export async function generateStaticParams() {
//   const Gpts = gpts
 
//   return Gpts.map((gpt) => ({
//     slug: gpt.slug,
//   }))
// }