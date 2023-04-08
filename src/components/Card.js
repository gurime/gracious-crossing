import Image from 'next/image'
import React from 'react'
import card1 from "../pages/img/card1-img.jpeg" 
import card2 from "../pages/img/bg-card3.jpg"
import card3 from "../pages/img/bg-card2.jpg"
export const Card = () => {
  return (
    <div><section className="cards" >
    <div className="card">
    <Image src={card1}   style={{width:'100%',height:'auto'}}   alt='...' priority/>
    <h2>Find Your Dream Home</h2>
    <p>Search our extensive database of homes for sale and find the perfect match for you and your family.</p>
    <button>Learn More</button>
    </div>
    
    <div className="card" >
    <Image src={card2} style={{width:'100%',height:'auto'}}  alt='...' priority/>
    <h2>Mortgage Calculator</h2>
    <p>Use our mortgage calculator to estimate your monthly payments and find a mortgage plan that works for you.</p>
    
    <button><a href="./Mortage.html">Calculate Your Mortgage</a></button>
    </div>
    
    <div className="card">
    <Image src={card3}  style={{width:'100%',height:'auto'}}   priority alt='...'/>
    <h2>Contact an Agent</h2>
        <p>Get in touch with one of our experienced real estate agents to help guide you through the home buying process.</p>
    <button>Learn More</button>
    </div>
    </section>
    </div>
  )
}
