"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";


function ServiceSection() {
    return (
        <Container className="my-5">
        <Row>
            <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/services_01.jpg" alt="Service 1" fluid />
                <h3>Service 1</h3>
                <p>Description of Service 1</p>
            </Col>
            <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/services_02.jpg" alt="Service 2" fluid />
                <h3>Service 2</h3>
                <p>Description of Service 2</p>
            </Col>
            <Col md={4} className="mb-3 text-center py-3">
                <Image src="/images/services_03.jpg" alt="Service 3" fluid />
                <h3>Service 3</h3>
                <p>Description of Service 3</p>
            </Col>
        </Row>
        </Container>
    )
}

export default ServiceSection;