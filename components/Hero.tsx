import Link from "next/link"
import { Button } from "./ui/button"
import { Download , Send} from "lucide-react"
import path from 'path'

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import Badge from "./Badge"
import Socials from "./Socials"
import DevImg from "./DevImg"

const Hero = () => {
    
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                    <h1 className="h1 mb-4">Hello, my name is Aditya Singhal</h1>
                    <p className="subtitle max-w-[490px] mx-auto    xl:mx-0">I am an experienced Full-Stack Web Developer dedicated to crafting exceptional digital experiences, With a focus on creating robust and user-friendly systems.
                    </p>
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="/contact">
                            <Button className="gap-x-2">
                                Contact Me <Send size={18}/>
                            </Button>
                        </Link>
                        <a href="/Aditya_Singhal_resume9.pdf" download="Aditya_Singhal_resume9">
                            <Button variant='secondary' className="gap-x-2">
                                    Download Resume <Download size={18}/>
                            </Button>
                        </a>
                    </div>
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary  transition-all"/>
                </div>

                <div className="hidden xl:flex relative">
                    <Badge 
                        icon={<RiBriefcase4Fill/>} 
                        endCountNum={1} 
                        badgeText="Years of Experience"
                        endCountText=""
                        containerStyles="absolute top-[40%] -left-[0rem]"
                    />
                    <Badge 
                        icon={<RiTodoFill/>} 
                        endCountNum={6} 
                        badgeText="Finished Projects"
                        endCountText=""
                        containerStyles="absolute top-[80%] -right-[1rem]"
                    />
                    {/* <Badge 
                        icon={<RiTeamFill/>} 
                        endCountNum={1000} 
                        badgeText="Problems Solved"
                        endCountText="+"
                        containerStyles="absolute top-[55%] -right-8"
                    /> */}
                    <div className="bg-hero_shape dark:bg-hero_shape w-[500px] h-[500px] bg-contain bg-no-repeat absolute -top-1 -right-2">    
                    </div>
                    <DevImg containerStyles="w-[510px] h-[462px] bg-no-repeat relative  bg-bottom " imgSrc="/hero.png"/>
                </div>
            </div>
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
            </div>
        </div>
    </section>
  )
}

export default Hero