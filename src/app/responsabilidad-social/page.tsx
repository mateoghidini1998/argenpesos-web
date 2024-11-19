import React from 'react'
import POSTS from '../../data/posts.json'
import ResponsabilidadPost from '../components/ResponsabilidadPost'


export default function ResponsabilidadSocial() {
  return (
    <section className='w-full h-full mt-[80px] md:mt-[100px] lg:mt-[152px] py-8'>
        <h1 className="text-[#82CC6D] text-center text-[34px] md:text-heading mb-20">
          <b>RESPONSABILIDAD</b> SOCIAL
        </h1>

        {POSTS.map((post, index) => (
        <ResponsabilidadPost
          key={index}
          image={post.image}
          title={post.title}
          subtitle={post.subtitle}
          content={post.content}
          reverse={index % 2 === 1}
          index={index}
        />
        ))}
    </section>
  )
}
