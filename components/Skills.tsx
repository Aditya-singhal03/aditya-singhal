import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import SvgComponent from './NextSvg'

const servicesData =[
    {
        title: 'Front-End',
        skills: [{icon:'/nextjs.svg' , name:'Next JS'},{icon:'/react.svg',name:"React Js"},{icon:'/tailwind.svg',name:'Tailwind'},{icon:'/typescript.svg',name:'TypeScript'},{icon:'/javascript.svg',name:'JavaScript'},{icon:"/redux.svg",name:'Redux'}]
    },
    {
        title: 'Back-End',
        skills: [{icon:"/node.svg", name:'Node JS'},{icon:"/prisma.svg", name:'Prisma'},{icon:"/postgresql.svg", name:'Postgresql'},{icon:"/express.svg", name:'Express'},{icon:"/redis.svg", name:'Redis'},{icon:"/mongodb.svg", name:'Mongo DB'}]
    },
    {
        title: 'Others',
        skills: [{icon:"/docker.svg", name:'Docker'},{icon:"/aws.svg", name:'AWS'},{icon:"/git.svg", name:'Git'},{icon:"/kafka.svg", name:'Kafka'},{icon:"/elasticsearch.svg", name:'ElasticSearch'}]
    },
]


const Skills = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Skills</h2>
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item,index)=>{
                    return (
                        <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-6 pb-6 justify-start items-center" key={index}>
                            <CardHeader className="text-primary p-0 mb-6">
                                <div className="text-3xl font-bold">
                                    {item.title}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className='flex flex-wrap gap-x-4 justify-center'>
                                    {item.skills.map((skill)=>{
                                        return <div key={index*100 +1} className='p-2 border-2 mb-4 rounded-lg flex gap-x-2 items-center '>
                                            <Image src={skill.icon} width={24} height={24} alt="" priority  ></Image>
                                            <div className=' font-medium'>{skill.name}</div>
                                        </div>
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills