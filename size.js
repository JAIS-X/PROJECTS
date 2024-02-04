import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Size = () => {
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
        <div>
            <img src="https://www.fanatics.com/content/ws/all/7bb3d533-c0f2-4dcc-a860-1115b3bb20cc.jpg"/>
            <img style={{height:"15.045cm",width:"20cm"}} src="https://images.squarespace-cdn.com/content/v1/55a80cc2e4b01d3d0f770a2d/1567615439146-N0WOPV4C33QXZUI5A3UV/ke17ZwdGBToddI8pDm48kHc4pZdbPfwV2gmwO2Xl1ot7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ub6s72Y9ehj5cZCmDJKfA593hjYc_LtWCmBk24SlIV4Jm7cT0R_dexc_UL_zbpz6JQ/Jersey-Size-Chart.png"></img>
        </div>
        <br></br>
        <br></br>
        <Divider>
        <Link to="/menu">
      <button style={{height:"1cm",width:"3cm",borderRadius:"4cm",backgroundColor:"lightblue"}}>Shop</button>
      </Link></Divider>
      </Box>
    </Layout>
  );
};

export default Size;
