import React from 'react'
import Link from 'next/link'

const ArticleGrid = ({post}) => {
const {frontmatter} = post ?? {}; 
return (
<>
{frontmatter && ( 
<div className="card" style={{
backgroundColor:'transparent',
boxShadow:'0 0 0 0 '
}}>
<img src={frontmatter.cover_image} alt="" />
<div className="authflex">
<p>{frontmatter.category}</p>
<div className="authpic-block">
<h3 className="card-catogory">{frontmatter.author}</h3>
<img style={{width:'30px',height:'30px'}} className="authpic" src={frontmatter.authpic} alt="" />
</div>
</div> 
<h2 className="card-title">{frontmatter.title}</h2>
<p className="card-content">{frontmatter.excerpt}</p>
<div style={{display:'flex',placeItems:'center',justifyContent:'space-between',padding:'0 10px'}}>
<Link href={`/DetailsPage/${post.slug}`} className='slugbtn btn'>
  <button className="card-button" rel="noreferrer">Read More</button>
</Link>
{frontmatter.date}
</div>
</div>
)}
</>
)
}

export default ArticleGrid

