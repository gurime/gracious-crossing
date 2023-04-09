import { useRouter } from 'next/router'
import footLogo from '../pages/img/gracious.png'
import Image from 'next/image'
export const Footer = () => {
    const scrollTo = () =>{
        window.scroll({top: 0,
        behavior: "smooth"
        })
        }  
        
const router = useRouter()
return (
<>
<footer>
<div className="footer-container">
<p>© Gracious Crosing or its affiliated companies. All rights reserved.</p>
<Image  onClick={scrollTo} src={footLogo}  alt='...'  priority/>
</div>

</footer>


</>
)
}
