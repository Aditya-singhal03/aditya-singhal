import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react'

const  infoData = [
    {
        icon: <User2 size={20}/>,
        text:'Aditya Singhal'
    },
    {
        icon: <PhoneCall size={20}/>,
        text:'+919057442883'
    },
    {
        icon: <MailIcon size={20}/>,
        text:'singhalbspr@gmail.com'
    },
    {
        icon: <GraduationCap size={20}/>,
        text:'B-Tech from IIT (ISM) Dhanbad'
    },
]

const qualificationData = [
    {
        title:'education',
        data:[
            {
                university: 'IIT (ISM) Dhanbad',
                qualification: 'Bachelor of Technology',
                years:'2019 - 2023'
            }
        ]
    },
    {
        title:'experience',
        data:[
            {
                company: 'JIO PLATFORMS LIMITED',
                role: 'Software Engineer',
                years:'2023 - Present'
            },
        ]
    }
]

const skillData = [
    {
        title:'skills',
        data:[
            {
                name:'HTML, CSS'
            },
            {
                name:'Front-end Development'
            },
            {
                name:'Javascript, PHP'
            },
            {
                name:'Back-end Development'
            },
            {
                name:'Back-end Development'
            },
        ]
    },
    {
        title:'tools',
        data:[
            {
                imgPath:'/vscode.svg'
            },
            {
                imgPath:'/notion.svg'
            }
        ]
    },
]

const About = () => {
    const getData = (arr:any[],title:string)=>{
        return arr.find((item)=>item.title===title)
    }
    //console.log(getData(qualificationData,'experience'))
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-hero_shape  w-[505px] h-[505px] bg-no-repeat bg-contain relative" imgSrc="/hero.png"/>
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="qualifications">
                            <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger value="qualifications" className="w-[162px] xl:w-auto">Qualification</TabsTrigger>
                                <TabsTrigger value="personal" className="w-[162px] xl:w-auto">Personal Info</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Skilled in both Frontend and Backend Development</h3>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0">I specialize in crafting intuitive website with cutting-edge technologies, delivering dynamic user experience</p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item,index)=>{
                                                return (
                                                    <div className="flex items-center gap-x-4 mx:auto xl:mx-0 justify-center xl:justify-start" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className=" flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div> 
                                            <div>English, Hindi</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left" >My Awesome Journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData,'experience').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData,'experience').data.map((item:any,index:number)=>{
                                                        const {company,role,years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div className="">
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28}/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData,'education').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8 mt-2">
                                                    {getData(qualificationData,'education').data.map((item:any,index:number)=>{
                                                        const {university,qualification,years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div className="">
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About