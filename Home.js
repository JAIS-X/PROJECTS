import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import ogh from"../images/ogh.jpg";
import "../styles/HomeStyles.css";
const Home = () => 
{
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${ogh}})` }}>
        <div className="headerContainer">
          <div className="aa">
          <marquee><h1>40% OFF USE CODE 'VIVA CR7"</h1></marquee>
          </div>
          <br/>
          <h1><i>STRIKERS WARDROBE</i></h1>
          <hr style={{width: "19cm"}}></hr>
          <p><i>QUALITY AT DOORSTEP</i></p>
          <Link to="/menu">
            <button><i>SHOP NOW</i></button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
