import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import ArticleGrid from '@/components/ArticleGrid'

const Articles = ({posts}) => {
return (
<>
<Navbar/>
<div className='Articlehero'>
<h1>Welcome to Gracious Crossing </h1>
<p>Discover Your Dream Home: Expert Advice on Shopping for Homes.</p>
</div>



<div className='card-grid'>
{posts && posts.map((post, index) => (
<ArticleGrid key={index} post={post}/>
))}
</div>
<Footer/>
</>
)
}

export default Articles

export async function getStaticProps() {
// Get files from the feartered articles dir
const files = await fs.promises.readdir('Articles');
  
// Get slug and frontmatter from blogs
const posts = await Promise.all(
files.map(async (filename) => {
// Create slug
const slug = filename.replace('.md', '');
  
// Get frontmatter
const markdownWithMeta = await fs.promises.readFile(
path.join('Articles', filename),
'utf-8');
  
const { data: frontmatter } = matter(markdownWithMeta);
return {
slug,
frontmatter,
};
})
);
// articles block
 



posts.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date));
  
return {
props: {
posts,

},
};
}