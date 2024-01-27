import React, {useState} from 'react'
//import Compteur from './composants/compteur'
import './App.css'
import Navbar from './composants/Navbar'
import Post from './composants/Post'
import {createBrowserRouter, Link, RouterProvider} from 'react-router-dom'



export default function App() {
  const [posts, setPosts]=useState([
    {
      id:1,
      titre:"Le titre1",
      contenu:"le contenu1",
      liker:'false'
    },
    {
      id:2,
      titre:"Le titre2",
      contenu:"le contenu2",
      liker:'false'
    },
    {
      id:3,
      titre:"Le titre3",
      contenu:"le contenu3",
      liker:'false'
    },
    {
      id:4,
      titre:"Le titre4",
      contenu:"le contenu4",
      liker:'false'
    }
  ])

  const like=(data)=>{
    const donnee=[...posts]
    const index=posts.indexOf(data)
    donnee[index]={...posts[index], liker:!posts[index].liker}
    setPosts(donnee)
    console.log(donnee)
}

const deletePost= (i)=>{
  const newdata=posts.filter((p)=>p.id !=i);
  setPosts(newdata);
};

const nbr=posts.filter((e)=>e.liker)

  return (
    <div>
      <Navbar nombre={nbr.length}/>
      {posts.map((p)=>(<Post data={p} key={p.id} likevar={like} del={deletePost}/>))}
      <Link to="apropos">Apropos</Link>
    </div>
    
  )
}
