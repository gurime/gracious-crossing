import React from 'react'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'








export default function PostPage({ frontmatter, content}) {
const router = useRouter();
const { title, author, date, cover_image, category, authpic } = frontmatter;

const scrollToTop = () => {
window.scroll({
top: 0,
behavior: 'smooth',
});
};

return (
<>
<Head>
<title>Itruth News | Articles</title>
</Head>
<Navbar />
<div className="article-container">
{/**block for goback btn and title */}
<div className="backbtn-box">
<h1>{title}</h1>
<button onClick={() => router.back()} className="backbtn">
&#8592; go back
</button>
</div>
{/**block for goback btn and title */}
{/**block for img */}
<div className="imgbox">
<img src={cover_image} alt="..." />
</div>
{/**block for img */}
{/**block for category and author */}
<div className="authflex">
<p>{category}</p>
<h3
style={{
display: 'flex',
placeItems: 'center',
fontWeight: '300',
}}
className="card-category">
{author}
{/**separator */}
<div
style={{
border: 'solid 1px',
height: '30px',
margin: '0 0 0 6px',
}}
></div>
{/**separator */}
<img
style={{ width: '60px', }}
className="authpic"
src={authpic}
alt=""
/>
</h3>
</div>
{/**block for category and author */}
<div className="flexdate">{date}</div>
<div className="body-content">
<ReactMarkdown children={content} />
</div>



<div
style={{
display: 'flex',
justifyContent: 'flex-end',
placeItems: 'center',
marginBottom: '1rem',
}}
>
<button
onClick={scrollToTop}
style={{
borderRadius: '50%',
border: 'none',
padding: '1rem 20px',
backgroundColor: 'red',
color: '#fff',
cursor: 'pointer',
}}>
&#x2191;
</button>
</div>
</div>
<Footer />
</>
);
}



export async function getStaticPaths() {
const articlesFiles = fs.readdirSync(path.join(process.cwd(), 'Articles'));

const paths = [
...articlesFiles.map((filename) => ({
params: {slug: filename.replace('.md', ''),},})),
];

return {
paths,
fallback: false
};
}

export function getStaticProps({ params: { slug } }) {
let markdownWithMeta;
let markdownFilePath;

// articles folder  
if (fs.existsSync(path.join('Articles', slug + '.md'))) {
markdownFilePath = path.join('Articles', slug + '.md');} 
// articles folder  

markdownWithMeta = fs.readFileSync(markdownFilePath, 'utf-8');
const { data: frontmatter, content } = matter(markdownWithMeta);

return {
props: {frontmatter,content,slug,},
};
}