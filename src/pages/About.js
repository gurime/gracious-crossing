import React from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import card1 from "./img/bg-amount_img.jpg"
import card2 from "../pages/img/about-buy-home.jpg"
import card3 from "../pages/img/about-money.jpg"
import card4 from '../pages/img/about-pro.jpg'
import card5 from '../pages/img/about-paper.jpg'
import Head from 'next/head'
const About = () => {
const router = useRouter()
return (
<>
<Head>
<title>Gracious Crossing | About</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Navbar/>
<div className="container">
<h1>About Gracious Crossing</h1>
<Image src={card1} alt="Company Logo" />
<p>
  Welcome to Gracious Crossing, where we make selling your home easy and hassle-free. Our team of experienced real estate professionals is dedicated to helping homeowners like you sell their properties quickly, no matter what condition they're in.
</p>
<h3>Gracious Crossings Mission</h3>
<p>
  Gracious Crossings mission is to provide homeowners with a fast, fair, and stress-free way to sell their homes. We understand that selling a home can be a difficult and emotional process, which is why we strive to make the experience as easy and painless as possible. We believe that everyone deserves a fair price for their property, and we're committed to providing that to every homeowner we work with.
</p>
<h3>Why Choose Gracious Crossing?</h3>
<p>
  When you choose Gracious Crossing, you're choosing a team of professionals who have years of experience in the real estate industry. We've helped hundreds of homeowners sell their properties quickly and for a fair price, and we're confident we can do the same for you. Here are just a few reasons why you should choose us:
</p>
<section className="cards">
<div className="card">
<Image src={card2} alt="..." priority/>
<h2>We Buy Homes</h2>
<p>We buy homes in any condition - no repairs or cleaning necessary. </p>
</div>
<div className="card">
<Image src={card3} alt="..." priority/>
<h2>Fair Prices</h2>
<p>We offer fair prices for every property we purchase. </p>
</div>
<div className="card">
<Image src={card5} alt="..." priority/>
<h2>Tough Work</h2>
<p>We handle all the paperwork and logistics, so you don't have to. </p>
</div>


<div className="card">
<Image src={card4} alt="" priority/>
<h2>Professional</h2>
<p>We provide friendly, professional, and transparent service every step of the way. </p>
</div>
</section>


<h3>Our Process</h3>
<p style={{ padding: '0 2.8rem' }}>
Our home buying process is simple and straightforward:
</p>
<ol className="oltext">
<li>Get in touch with us by phone, email, or through our website</li>
<li>We'll schedule a time to come see your property and make you an offer</li>
<li>If you accept our offer, we'll handle all the paperwork and logistics</li>
<li>We'll close on the sale of your property, usually in as little as 7 days</li>
<li>You get paid in cash, and we take care of the rest!</li>
</ol>
<h3>Contact Gracious Crossing</h3>
<p>If you're ready to sell your home, or if you have any questions about our services, please don't hesitate to get in touch with us. You can call us at 
<Link href="tel:1-800-555-1234"> 1-800-555-1234 </Link>, email us at 
<Link href="mailto:info@graciouscrossing.com"> info@graciouscrossing.com </Link>, or fill out the contact form on our 
<Link href="/Contact"> contact page </Link>.</p>
<p>Thank you for considering Gracious Crossing for your home selling needs. We look forward to working with you!</p>
</div>
<Footer/>
</>
)
}

export default About