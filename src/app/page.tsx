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
            <h2>About Us</h2>
            <h6>What we do?</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ea nostrum dicta pariatur! Repudiandae, veniam libero! Minus iste nam consectetur eaque quasi, porro asperiores?
            </p>
            <Button variant="info">Learn More</Button>
            </Col>
            <Col md={6}>
            <p>
              <Image src="/images/aboutus.jpg" alt="About us" width={500} height={300}></Image>
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