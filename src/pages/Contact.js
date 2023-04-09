import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
const Contact = () => {
return (
<>
<Head>
<title>Gracious Crossing | Contact</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Navbar/>
<div className="form-container">
<form className="contactform" >
<h1>Contact Gracious Crossing</h1>
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Enter your name" required />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" placeholder="Enter your email" required />
<label htmlFor="message">Message:</label>
<textarea id="message" rows="10" name="message" placeholder="Enter your message"  required></textarea>
<button type="submit">Send</button>
</form>
</div>
<Footer/>
</>
)
}

export default Contact