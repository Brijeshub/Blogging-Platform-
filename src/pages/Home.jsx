import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components';
import Technology from './blog_contents/Technology';
import Trevelling from './blog_contents/Trevelling';
import Foodies from './blog_contents/Foodies';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-left">
               <div className="flex flex-wrap">
                         <div className="p-2 w-full">
                             <h1 className="text-2xl font-bold hover:text-green-500 text-center">
                                 Login to read Posts & Upload Post
                             </h1>
                         </div>
                   </div>
               
                <Container>
                <Technology/>
                    {/* <Trevelling/>
                    <Foodies/> */}
                </Container>
            </div>
        )
    }
               
           
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home