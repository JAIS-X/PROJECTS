import React from 'react';
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const FAQ = () => {
  return (
    <Layout>
    <div className="faq-page">
      <h1>Frequently Asked Questions:</h1>
      <hr></hr>
      <div className="faq-section">
        <br></br>
        <h2>General:</h2>
        <br></br>
        <div className="faq-item">
          <h3>1.Is the cloth worth?</h3>
          <br></br>
          <p>Users can check our HD images which gives a clear aspect of our products,worth every penny.</p>
        </div>
        <br></br>
        <div className="faq-item">
          <h3>2.How can I contact customer support?</h3>
          <br></br>
          <p>Users can access our contact us page and fill it out and we will reach you shortly !</p>
        </div>
      </div>
      <br></br>
      <div className="faq-section">
        <div className="faq-item">
          <h3>3.Is t-shirts are available of all size?</h3>
          <br></br>
          <p>Yes,users can access separate page named were size charts are available.</p>
        </div>
        <br></br>
        <div className="faq-item">
          <h3>4.How long does shipping take?</h3>
          <br></br>
          <p>Shipping times may vary depending on your location. Generally, it takes 3-5 business days for domestic shipping and 7-10 business days for international shipping.</p>
        </div>
      </div>
      <br></br>
      <div>
      <h3>5.Are your products made from sustainable or eco-friendly materials?</h3>
      <br></br>
      <p>We prioritize sustainability and eco-consciousness in our product selection. Many of our items are made from sustainable materials, such as organic cotton or recycled polyester. Look for specific eco-friendly labels or descriptions on product pages.</p>
      </div>
      <br></br>
      <div>
        <h3>6.Do you offer customization or personalization options for your products?</h3>
        <br></br>
        <p>Yes, we offer customization options for certain products. Please check individual product pages or contact our customer support team to inquire about customization availability and process.</p>
      </div>
      <br></br>
      <div>
        <h3>7.Are your products covered by a warranty?</h3>
        <br></br>
        <p>Yes, we stand behind the quality of our products. Most of our items come with a manufacturer's warranty. The duration and coverage of the warranty may vary depending on the product. Please check the product description or contact our customer support team to learn more about the warranty terms for specific items.</p>
      </div>
      <br></br>
      <div>
        <h3>8.How do I care for and maintain the clothing I purchase from your website?</h3>
        <br></br>
        <p>Proper care and maintenance can help prolong the lifespan of your clothing. We provide care instructions on each product page and recommend following the instructions closely. General tips include machine washing on a gentle cycle, avoiding harsh detergents, and air drying or tumble drying on low heat. For specific care inquiries, feel free to contact our customer support team.</p>
      </div>
      <br></br>
      <div>
        <h3>9.Are there any discounts or promotions available?</h3>
        <br></br>
        <p>Use coupon code<mark>VIVA CR7</mark>,We occasionally offer special discounts and promotions to our customers. To stay updated on our latest offers, we encourage you to sign up for our newsletter or follow us on social media. Additionally, keep an eye out for any ongoing sales or limited-time promotions displayed on our website. We strive to provide great value for our customers and deliver exciting deals on our high-quality clothing.</p>
      </div>
      <br></br>
      <br></br>
      <Divider>
      <Link to="/menu">
      <button style={{height:"1cm",width:"3cm",borderRadius:"4cm",backgroundColor:"lightblue"}}>Shop</button>
      </Link></Divider>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </Layout>
  );
}

export default FAQ;

