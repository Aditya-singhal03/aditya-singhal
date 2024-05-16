interface projectObjectType{
    image:string,
    category: string,
    name: string,
    description:string,
    link:string,
    github:string
}

import Link from "next/link"
import Image from "next/image"
import {Card, CardHeader} from "@/components/ui/card"
import { Github , Link2} from 'lucide-react';
import {Badge} from '@/components/ui/badge'

const ProjectCard = ({project}:{project:projectObjectType}) => {
  return (
    <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
            <div className="relative w-full h-[300px] flex justify-center
            items-center bg-tertiary dark:bg-secondary/40 xl:bg-">
                <Image src={project.image} alt="" className="absolute bottom-0 shadow-2xl" width={300} height={350} priority key={project.image}/>
                <div className="flex gap-x-4">
                    <a target="_blank" href={project.link} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                        <Link2 className="text-white"/>
                    </a>
                    <a target="_blank" href={project.github} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                        <Github className="text-white"/>
                    </a>
                </div>
            </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category }</Badge>
            <h4 className="h4 mb-1">{project.name}</h4>
            <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard