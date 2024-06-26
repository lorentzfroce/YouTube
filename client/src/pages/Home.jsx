import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;

export default function Home({ type }) {

    const [videos, setVideos] = useState([]);

    

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                await axios.get(`http://localhost:3000/api/videos/${type}`)
                .then((res)=>setVideos(res.data))
            } catch (error) {
                console.error(error);
            }
        };
        fetchVideos();
    }, [type]);

    return (
        <Container>
            {videos.map((video) => {
                return <Card key={video._id} video={video} />
            })}
        </Container>
    );
}