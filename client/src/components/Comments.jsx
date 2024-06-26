import React from "react"
import styled from "styled-components"
import grandCanyonImage from '../img/grand_canyon.jpg';
import Comment from "./Comment";
import { useSelector } from "react-redux";
import axios from 'axios';

const Container=styled.div``

const NewComment=styled.div`
display:flex;
align-items:center;
gap:10px;
`

const Avatar=styled.img`
width:50px;
height:50px;
border-radius:50%;
`

const Input=styled.input`
border:none;
border-bottom:1px solid ${({theme})=>theme.soft};
background-color:transparent;
outline:none;
padding:5px; 
width:100%;
 `

export default function Comments(videoId){

    const currentUser= useSelector(state=> state.user)

    const [comments,setComments]=React.useState([]);

    React.useEffect(()=>{
        const fetchComments=async()=>{
            try{
                const res=await axios.get(`http://localhost:3000/api/comments/${videoId.videoId}`)
                setChannel(res.data)
            }catch(err){
                console.log(err)
            }   
        }
        fetchComments()
    },[videoId])

    return(
        <Container>
            <NewComment>
                <Avatar src={currentUser.image}/>
                <Input placeholder="Add a comment"/>
            </NewComment>
            {
                comments.map(comment=>{
                    <Comment key={comment._id} comment={comment}/>
                })
            }
        </Container>
    )
}