import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import cardimg1 from '../pages/img/home-card1.jpeg'
import cardimg2 from '../pages/img/home-card2.jpg'
import cardimg3 from '../pages/img/home-card3.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
export default function Home() {
const router = useRouter()
return (
<>
<Head>
<title>Gracious Crossing</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
   
<Navbar/>      
<section 
className="hero">
<h1>Welcome to Gracious Crossing </h1>
<p>Here you can find all the information you need about our products and services.</p>
<button

onClick={() => router.push('/Services')}
style={{
backgroundColor:'#109351',
color:'#fff',
padding:'10px 20px',
textDecoration: 'none',
display: 'inline-block',
borderRadius: '5px',
transition: '.5s',
border: 'none',
marginBottom: '5rem'
}}
>Go To Services</button>
</section>  



<h1 className='tagline-title'>The internets #1 site to find a home</h1>



<div className="card-block">
<div className="tagline-header">
<h1>Find the best homes</h1>
<p>Browse some of the highest 
quality homes, list your property, 
sign a lease and more.</p>
<Link href='/Info'>More Info</Link>
</div>
<Image height={300} src={cardimg1} alt="" priority/>
</div>

<div className="card-block card-block-reverse">
<Image height={300} src={cardimg2} alt="" priority/>
<div className="tagline-header tagline-header-reverse">
<h1>List your property</h1>
<p>Reach millions of renters by listing your property.</p>
<Link href='/Listings'>Add your listings</Link>
</div>
</div>

<div className="card-block">
<div className="tagline-header">
<h1>Tips for new House owners</h1>
<p>Check out our guides for tips on owning your first home.</p>
<Link href='/Articles'>Articles</Link>
</div>
<Image height={300} src={cardimg3} alt="" priority/>
</div>


<Card/> 
<Footer/>
</>
)
}
