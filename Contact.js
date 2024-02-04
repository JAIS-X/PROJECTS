import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4"><i>ANY QUERIES ? NO PROB,CONTACT USING BELOW DETAILS :</i> </Typography>
        <hr style={{width:"25cm"}}></hr>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "lightblue", color: "black" }}
                  align="center"
                >
                  <i>Contact Details:</i>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt:-1 }} /> 2344-000-2677
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: -1}} /> strikersw@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: -1 }} />9876543210
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <br></br>
        <Typography variant="h5"><i><b>WE'D LOVE TO KNOW HOW YOU DISCOVERED US ?!</b></i></Typography>
        <hr style={{width:"15cm"}}></hr>
        <br></br>
        <Radio sx={{color:"white"}}></Radio><text><b>Social Media</b></text>
        <br></br>
        <Radio sx={{color:"white"}}></Radio><text><b>Offline billboards</b></text>
        <br></br>
        <Radio sx={{color:"white"}}></Radio><text><b>Newspaper Articles</b></text>
        <br></br>
        <Radio sx={{color:"white"}}></Radio><text><b>Magazines</b></text>
        <br></br>
        <Radio sx={{color:"white"}}></Radio><text><b>Refered by friend</b></text>
        <br></br>
        <TableContainer>
        <br></br>
        <p style={{textAlign:"left",fontSize:"x-large"}}>
          <ul><i>
          <h4>OUR HIGHLIGHTS IN THIS SERVICE</h4>
          <hr style={{width:"10cm"}}></hr>
          <TableRow><TableCell><li>Quality</li></TableCell></TableRow>
          <TableRow><TableCell><li>Durability</li></TableCell></TableRow>
          <TableRow><TableCell><li>Longevity</li></TableCell></TableRow>
          <TableRow><TableCell><li>Colorfastness</li></TableCell></TableRow>
          <TableRow><TableCell><li>Shrinkage Control</li></TableCell></TableRow>
          <TableRow><TableCell><li>Comfort and style</li></TableCell></TableRow>
          <TableRow><TableCell><li>Elegance</li></TableCell></TableRow>
          <TableRow><TableCell><li>Trust</li></TableCell></TableRow>
          <TableRow><TableCell><li>Washable</li></TableCell></TableRow>
          <TableRow><TableCell><li>Reliable product</li></TableCell></TableRow>
          </i></ul>
        </p></TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
