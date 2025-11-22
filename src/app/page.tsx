"use client";
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import WorkSection from "./components/worksection";
import ServiceSection from "./components/servicesection";
import ContactSection from "./components/contactsection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
  
  <Col md={6} className="align-self-center mb-3">
    <h2 className="text-danger fw-bold" style={{ textShadow: '0 0 10px rgba(220, 53, 69, 0.5)' }}>About Us</h2>
    <h6 className="text-white-50">What we do?</h6>
    <p className="text-white">
      Menawarkan penjelajahan dimensi baru upside down. Dimana experience seperti ini hanya bisa dirasakan disini!
    </p>
    <Button variant="danger">Learn More</Button> 
  </Col>

  
  <Col md={6}>
    <p>
      <Image 
        src="/images/upsidedown.jpg" 
        alt="About us" 
        width={500} 
        height={300}
        style={{
          borderRadius: '15px',                        
          boxShadow: '0 0 30px rgba(220, 53, 69, 0.6)', 
          border: '1px solid rgba(220, 53, 69, 0.5)'   
        }}
      ></Image>
    </p>
  </Col>
</Row>
        </Container>
        <WorkSection></WorkSection>
        <ServiceSection ></ServiceSection>
        <section id="contact">
          <ContactSection ></ContactSection>
        </section>
        <Footer></Footer>
      </main>
      </div>
  );
}