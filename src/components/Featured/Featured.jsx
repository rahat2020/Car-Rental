"use client"
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from 'react-bootstrap/Card';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { carData } from '@/data/fakedata';



const Featured = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        setData(carData)
    }, [])
    return (
        <div className='mt-4 mb-5'>
            <Container>
                <div className="d-flex justify-content-start algin-items-center text-center">
                    <h3>Find car rental and driver service near you</h3>
                    <Dropdown className='ms-2'>
                        <Dropdown.Toggle variant="white fw-bold baseTColor fs-5" id="dropdown-basic" size="sm">
                            Select City
                            <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dubai</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Abu Dhabi</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Sharjah</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Row>
                    {
                        data?.map((item, i) => (
                            <Col md={3} className='gy-3' key={i}>
                                <Card className='border-0 shadow' style={{ height: '230px' }}>
                                    <Card.Img variant="top" src={item?.photo} />
                                    <Card.Body>
                                        <Card.Title className='text-center fw-bold text-dark'>{item.title}</Card.Title>
                                        <Card.Text className='d-flex flex-column text-center'>
                                            <span className='text-secondary'><strong>Rent per hour:</strong> {item?.price} AED</span>
                                            <span className='text-secondary'><strong>Total Cars:</strong> {item?.amount}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <div className="d-flex justify-content-center align-items-center py-4">
                    <Button className='baseBorder baseTColor bg-transparent'>see more <ArrowRightAltIcon/></Button>
                </div>
            </Container>
        </div>
    )
}

export default Featured