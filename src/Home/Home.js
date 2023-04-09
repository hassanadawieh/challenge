import React , { useContext } from 'react';
import UserContext from "../UserContext";

const Home = () => {
    const accessToken = localStorage.getItem("accessToken");
    const token = useContext(UserContext);
    console.log(accessToken)
    return(
        <div className='home-content'>
            Home page<br></br><br></br>
            <span>useContext:      {token}</span><br></br>
            <span>localStorage:      {accessToken}</span>
        </div>
    )
}

export default Home;