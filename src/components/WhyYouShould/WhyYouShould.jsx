import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhyYouShould = () => {
    return (
        <section className='mt-5 pt-5'>
            <Container>
                <div className="d-flex justify-content-start align-items-center w-50">
                    <h1>Why you should <span className='baseTColor'>rent a car</span> with us</h1>
                </div>
                <div className="py-4">
                    <Row>
                        <Col md={3}>
                            <div className="d-flex justify-content-between align-items-center border-end px-2 p-1">
                                <h1 className='baseTColor fw-bold '>450</h1>
                                <div className="d-flex flex-column">
                                    <span className='text-secondary fw-bold'>rental</span>
                                    <span className='text-secondary fw-bold'>companies</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-between align-items-center border-end px-2 p-1">
                                <h1 className='baseTColor fw-bold '>315</h1>
                                <div className="d-flex flex-column">
                                    <span className='text-secondary fw-bold'>rental cars</span>
                                    <span className='text-secondary fw-bold'>registered</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-between align-items-center border-end px-2 p-1">
                                <h1 className='baseTColor fw-bold '>45k</h1>
                                <div className="d-flex flex-column">
                                    <span className='text-secondary fw-bold'>satisfied</span>
                                    <span className='text-secondary fw-bold'>customers</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="d-flex justify-content-between align-items-center px-2 p-1">
                                <h1 className='baseTColor fw-bold '>45</h1>
                                <div className="d-flex flex-column">
                                    <span className='text-secondary fw-bold'>seconds average</span>
                                    <span className='text-secondary fw-bold'>booking time</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default WhyYouShould