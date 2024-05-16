'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {User , MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"


const Form = () => {
  const [senderName,setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [mailContent,setMailContent] = useState("")
  const { toast } = useToast()

  const handleMailSent = async(e: React.SyntheticEvent)=>{
    e.preventDefault()
    const data = {
      senderName,
      senderEmail,
      mailContent
    }
    const response  = await fetch("/api/mail",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    });
    const ans =await  response.json()
    toast({
      description: ans,
    })
  }

  return (
    <form action="" className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name" value={senderName} onChange={(e)=>setSenderName(e.target.value)}/>
            <User className="absolute right-6" />
        </div>

        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email" value={senderEmail} onChange={(e)=>setSenderEmail(e.target.value)}/>
            <MailIcon className="absolute right-6"/>
        </div>

        <div className="relative flex items-center">
            <Textarea  placeholder="Type your message here" value={mailContent} onChange={(e)=>setMailContent(e.target.value)}/>
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <Button className="flex items-center gap-x-1 max-w-[166px]" onClick={handleMailSent}>Let's Talk
        <ArrowRightIcon size={20}/>
        </Button>
    </form>
  )
}

export default Form