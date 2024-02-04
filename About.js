import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4"><u><i>ABOUT US</i></u></Typography>
        <p><h2>
            <h3><i>Introduction</i></h3>
            <hr></hr>
            "Welcome Strikers! We are an online store dedicated to providing football enthusiasts with a wide selection of high-quality jerseys from their favorite teams and players.Whether you're a passionate supporter or a casual fan, we aim to offer a seamless shopping experience and deliver authentic jerseys to your doorstep. Our team is committed to ensuring customer satisfaction by offering genuine products, competitive prices, and reliable customer service.Join us in celebrating the spirit of football by wearing your team's colors with pride!.Your ultimate destination for all things football! At Strikers Wardrobe, we are passionate about the beautiful game and dedicated to providing football enthusiasts with top-quality merchandise and apparel.
            <hr></hr>
            <br></br>
            <h3><i>Mission</i></h3>
            <hr></hr>
            Our mission is to outfit every striker with the finest gear, whether you're a professional player, an amateur enthusiast, or a dedicated fan.With a focus on quality, performance, and style, we partner with renowned brands and manufacturers to bring you authentic and licensed merchandise from your favorite clubs and national teams. We understand the importance of representing your team with pride, and that's why we strive to offer an extensive selection to cater to fans across the globe.
            At Strikers Wardrobe, we are not just a store; we are a community of football enthusiasts. 
            <hr></hr> 
            <br></br>
            <h3><i>Vision</i></h3>
            <hr></hr>
            Our team is composed of passionate individuals who live and breathe the sport.We are committed to providing exceptional customer service, ensuring that your shopping experience with us is seamless, enjoyable, and satisfying.
            Whether you're looking for the latest jersey release,strikers Wardrobe has got you covered. Join us on this exciting journey as we celebrate the beautiful game and embrace the spirit of football through our diverse range of products.
            Get ready to showcase your love for football in style with Strikers Wardrobe. Explore our collection, shop with confidence, and be a part of the Strikers Wardrobe family today!"      
            <hr></hr>       
        </h2></p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;
