import Axios from 'axios';
import React from 'react';


const Home = (props)=>{
    const HandleJoin = ()=>{
        Axios.get('http://localhost:8080/join').then(res=>{
        props.history?.push(`/join/${res.data.link}?quality=${quality}`)
    })
    }
     return(
         <React.Fragment>
             <button onClick={HandleJoin}>Join</button>
         </React.Fragment>
     )
}

export default Home;