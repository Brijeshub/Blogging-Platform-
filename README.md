# Project of Blogging
## Project Details:
The project working on is a comprehensive blogging web application developed using *React* for the frontend and *Appwrite* for the backend.

**Add content:** Users can create new blog posts, input text, images, and other multimedia, and save their drafts or publish them directly.

**Update content:** Authors have the option to edit their existing posts, making it easy to refine or update information.

**Delete content:** Users can remove their posts, giving them full control over what is displayed on the platform.

**Post management:** The app allows for creating, managing, and publishing posts easily with an intuitive user interface.


## Features:
- Login and Logout
- Post Content
- Update Post
- Delete Post
- Write Content
- Add Image in the Post
- See all Post
- Security of the user

## Rquerment Technology for the Project:
- Use Appwrite for 'localhost' to store 'database' of the date and front-end use React Js;
### Dependencies:
**Install these dependencies on our system.**
1. @reduxjs/toolkit
2. @tinymce/tinymce-react
3. appwrite
4. html-react-parser
5. react-hook-form
6. react-redux
7. react-router-dom

## Overview of Project Video:
<video controls src="Untitled video - Made with Clipchamp.mp4" title="Title"></video>

### Root folder List:
- **Root_Folder:** appwrite:

        auth.js:'config/write/make all function':
        -create accunt,
        -login,
        -logout, 
        -getcurrentuser;


        config.js:'write a function after login the page'.
        -createPost
        -updatePost
        -deletePost
        -getPost
        -getPosts
        -uploadFile
        -deleteFile
        -getFilePreview;

### Root_Components folder:
**Folder:** container

      Container.jsx

**Folder:** footer

      Footer.jsx
             
**Folder** header

     Header.jsx
     LogoutBtm.jsx             
              
**Folder:** postForm

     PostForm.jsx     
              
**Root_Folder:** conf 

'iss folder me '.env' variable ka access lete hai object bnate hai fir jaha bhi use karna ho
             issi se access lete hai'

     Conf.js

     'js file bnate hai because do not return this is pure javascript'


        
                              
**Root_Folder:** page

         AddPost.jsx
         AllPosts.jsx
         EditPost.jsx
         Home.jsx
         Login.jsx
         Post.jsx
         Signup.jsx

**Root_Folder:** store

Is folder me redux se releted functionality bnate hai.

          authSlice.js 
          store.js

## Root_File_List :

**.env:** 
    
iss folder ko git par push nhi karte hai,
store all configetion like a project detials and database detials.

- Appwrite url
- project ID
- Database  ID
- Collection ID
- Bucket ID(image for a image)

**.env.sample:**       
So will make a  file in this file copy all the .env file only Appwrite url
      
     VITE_project_url="testing project"

.env file ke access ke liye liye 'console.log(import.meta.env.VITE_project_url)' likhte hai in App.jsx file me.

