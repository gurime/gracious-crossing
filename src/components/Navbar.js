import Link from 'next/link'
import React from 'react'
import Navlogo from '../pages/img/gracious.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
export const Navbar = () => {

const router = useRouter()
return (
<>
<nav className='nav'>
<div className="navlogo">
<Image onClick={() => router.push('/')} src={Navlogo} height={36} alt='...' priority />
</div>
<ul className="navlinks">
<li><Link href="/">Home</Link></li>
<li><Link href="/about">About</Link></li>
<li><Link href="/services">Services</Link></li>
<li><Link href="/contact">Contact</Link></li>
<li><Link href="/faq">Faq</Link></li>
</ul>
</nav>
</>
)
}
