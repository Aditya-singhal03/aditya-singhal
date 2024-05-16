'use client'
import { 
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill
} from "react-icons/ri"
import { SiLeetcode } from "react-icons/si"


const icons = [
  {
    path: "https://www.linkedin.com/in/aditya-singhal-874b1b1a1/",
    name: <RiLinkedinFill/>
  },
  {
    path: "https://github.com/Aditya-singhal03",
    name: <RiGithubFill/>
  },
  {
    path: "https://twitter.com/Aditya_10xDev",
    name: <RiTwitterXFill/>
  },
  {
    path:"https://leetcode.com/u/Aditya_IIT_DHN/",
    name:<SiLeetcode/>
  }
]

const Socials = ({containerStyles,iconsStyles}:{containerStyles:string,iconsStyles:string}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return <a target="_blank" href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </a>
      })}
    </div>
  )
}

export default Socials