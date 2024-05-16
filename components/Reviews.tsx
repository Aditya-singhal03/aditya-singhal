'use client'

import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

const reviewsData = [
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        avatar:"/hero.png",
        name: "Richard Thompson",
        job:"Chef",
        review:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            <Swiper
                className="h-[350px]" 
                slidesPerView={1} 
                breakpoints={{
                    640:{
                        slidesPerView:2
                    },
                    1400:{slidesPerView:3}
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable:true}}
                >
                {reviewsData.map((person,index)=>{
                    return <SwiperSlide className="index">
                        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                            <CardHeader className="p-0 mb-10">
                                <div className="flex items-center gap-x-4">
                                    <Image src={person.avatar} alt="" width={70} height={10} priority/>
                                    <div>
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews