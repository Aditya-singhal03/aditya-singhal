'use client'

import { useState } from "react"
import {Tabs , TabsList, TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from "@/components/ProjectCard"
import { TabsContent } from "@radix-ui/react-tabs"

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

const uniqueCategories = ['all projects' , ...new Set(projectData.map((item)=>item.category))]


const page = () => {
  const [categories , setCategories] = useState(uniqueCategories)
  const [Pcategory , setPcategory] = useState('all projects')

  const filteredProject = projectData.filter((project)=>{
    return Pcategory==='all projects'? project:project.category===Pcategory
  });

  console.log(categories)

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={Pcategory} className="mb-24 xl:mb-48">
          <TabsList className={`w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none`}>
            {categories.map((category,index)=>{
              return <TabsTrigger 
              onClick={()=>setPcategory(category)}
              value={category} 
              key={index} 
              className="capatalize w-[162px] md:w-auto"
              >{category}</TabsTrigger>
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-col-1 lg:grid-cols-3 gap-4">
            {filteredProject.map((project,index)=>{
              return <TabsContent value={Pcategory} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default page