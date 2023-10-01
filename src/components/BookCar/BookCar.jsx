"use client"
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const carData = [
    {
        id: 1,
        title: 'Luxary',
        photo: '/images/f1.png',
        price: 123,
        amount: 59,
    },
    {
        id: 2,
        title: 'Sports',
        photo: '/images/f2.png',
        price: 323,
        amount: 29,
    },
    {
        id: 3,
        title: 'Monthly',
        photo: '/images/f3.png',
        price: 223,
        amount: 19,
    },
    {
        id: 4,
        title: 'Family',
        photo: '/images/f4.png',
        price: 255,
        amount: 110,
    },
    {
        id: 5,
        title: 'Car with driver',
        photo: '/images/f6.png',
        price: 313,
        amount: 140,
    },
    {
        id: 6,
        title: 'Luxary',
        photo: '/images/f1.png',
        price: 123,
        amount: 59,
    },
    {
        id: 7,
        title: 'Suv',
        photo: '/images/f7.png',
        price: 123,
        amount: 59,
    },
    {
        id: 8,
        title: 'Luxary',
        photo: '/images/f8.png',
        price: 123,
        amount: 59,
    },
]


const BookCar = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        setData(carData)
    }, [])

    return (
        <section className='mt-4 pt-4'>
            <Container>
                <div className="d-flex text-center justify-content-center align-items-center">
                    <div className="w-50">
                        <h1 className='fw-bold'>BOOK YOUR <span className='baseTColor'>SUITABLE CAR</span></h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eius ab architecto totam distinctio ea quasi ex facilis minus voluptates.</p>
                    </div>
                </div>
                <div className="py-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <Dropdown className=' shadow'>
                                <Dropdown.Toggle variant="light fw-bold text-secondary " id="dropdown-basic">
                                    Price
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className='ms-2 shadow'>
                                <Dropdown.Toggle variant="light fw-bold text-secondary  " id="dropdown-basic">
                                    Locations
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className='ms-2 shadow'>
                                <Dropdown.Toggle variant="light fw-bold text-secondary  " id="dropdown-basic">
                                    Color
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className='ms-2 shadow'>
                                <Dropdown.Toggle variant="light fw-bold text-secondary  " id="dropdown-basic">
                                    Rating
                                    <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <Row>
                    {
                        data?.map((item, i) => (
                            <Col md={3} className='gy-3' key={i}>
                                <Card className='border-0 shadow' style={{ height: '380px' }}>
                                    <Card.Img variant="top" src={item?.photo} style={{ width:'100%',height: '200px'}}/>
                                    <Card.Body className='text-start'>
                                        <Card.Title className='text-start fw-bold text-dark'>{item.title}</Card.Title>
                                        <Card.Text className='d-flex flex-column text-start'>
                                            <strong>70 AED <span className='text-secondary'>/Day</span></strong>
                                            <div className="d-flex justify-content-start align-items-center">
                                                <StarIcon className='icons' />
                                                <StarIcon className='icons' />
                                                <StarIcon className='icons' />
                                                <StarIcon className='icons' />
                                                <StarIcon className='icons' />
                                                <span className='ms-2 text-secondary'>45 reviews</span>
                                            </div>
                                            <span className='text-secondary'><strong>Total Cars:</strong> {item?.amount}</span>

                                            <div className="d-flex justify-content-between align-items-center py-2">
                                                <div className="d-flex justify-content-center flex-column align-items-center">
                                                    <div className="iconsBords">
                                                        <AirlineSeatReclineExtraIcon />
                                                    </div>
                                                    <span className='text-secondary'>4 seat</span>
                                                </div>
                                                <div className="d-flex justify-content-center flex-column align-items-center">
                                                    <div className="iconsBords">
                                                        <AcUnitIcon />
                                                    </div>
                                                    <span className='text-secondary'>AC</span>
                                                </div>
                                                <div className="d-flex justify-content-center flex-column align-items-center">
                                                    <div className="iconsBords">
                                                        <AutorenewIcon />
                                                    </div>
                                                    <span className='text-secondary'>Auto</span>
                                                </div>
                                                <div className="d-flex justify-content-center flex-column align-items-center">
                                                    <div className="iconsBords">
                                                        <LocalGasStationIcon />
                                                    </div>
                                                    <span className='text-secondary'>Petrol</span>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="baseBg text-white  fw-bold text-center text-capitalize">
                                        rent now
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default BookCar