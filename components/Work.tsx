'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'
import ProjectCard from '@/components/ProjectCard'

interface projectObjectType{
    image:string,
    category: string,
    name: string,
    description:string,
    link:string,
    github:string
}

const projectData:projectObjectType[] = [
    {
        image:'/ecommerce.png',
        category: 'React js',
        name: 'E-Commerce Store',
        description:'A Full Stack E-commerce Web Application using Mern stack',
        link:'https://e-commerce-aditya03.netlify.app/',
        github:'https://github.com/Aditya-singhal03/E-Commerce'
    },
    {
        image:'/codesphere.jpeg',
        category: 'React js',
        name: 'CodeSphere',
        description:'A Full-Stack Coding Platform with Secure Code Execution using Docker and RabbitMQ',
        link:'https://www.youtube.com/watch?v=rN-xr2AIxFs',
        github:'https://github.com/Aditya-singhal03/CodeSphere'
    },
    {
        image:'/promptopia.png',
        category: 'Next js',
        name: 'Promptopia',
        description:'Promptopia is a Full Stack Prompt Sharing web application created using Next.js Framework.',
        link:'https://promptopia-5oaq5en0i-aditya-singhal03.vercel.app/',
        github:'https://github.com/Aditya-singhal03/Promptopia'
    },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Some of my projects that i have built</p>
                <Link href='/projects'><Button>All Projects</Button></Link>
            </div>
            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                className="h-[520px]" 
                slidesPerView={1} 
                breakpoints={{
                    640:{
                        slidesPerView:2
                    }
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable:true}}
                >
                    {/* show only first 4 projects for the slide */}
                    {projectData.slice(0,4).map((project,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work