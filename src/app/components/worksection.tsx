'use client'
import React from 'react'; // Tambahkan ini untuk keamanan
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container className="my-5">
            <Row className='mb-4'>
                <Col md={12} className="text-center">
                    <h2 className="fw-bold">What we offer?</h2>
                    <p className="text-muted">A Fantastic Experience</p>
                </Col>
            </Row>
            
            <Row>
                {/* CARD 1 */}
                <Col md={4} className="mb-3">
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="/images/Demogorgon.jpg" 
                            // PERBAIKAN: Style langsung disini agar tidak error
                            style={{ 
                                width: '100%', 
                                height: '250px',      // Tinggi fix agar seragam
                                objectFit: 'cover',   // Gambar di-crop rapi (tidak gepeng)
                                objectPosition: 'center' 
                            }} 
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="fw-bold">Riding a Demogorgon</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary" className="mt-auto">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* CARD 2 */}
                <Col md={4} className="mb-3">
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="/images/Vecna.jpg" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                objectPosition: 'center' 
                            }} 
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="fw-bold">Studying with our Teacher</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary" className="mt-auto">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* CARD 3 */}
                <Col md={4} className="mb-3">
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Img 
                            variant="top" 
                            src="/images/EL.jpg" 
                            style={{ 
                                width: '100%', 
                                height: '250px', 
                                objectFit: 'cover',
                                objectPosition: 'center' 
                            }} 
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="fw-bold">Experiencing become eleven for a day</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary" className="mt-auto">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;