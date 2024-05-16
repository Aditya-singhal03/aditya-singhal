import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
        <Image src="/README.svg"  width={54} height={54} alt="weddw"/>
    </Link>
  )
}

export default Logo

