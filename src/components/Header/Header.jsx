"use client"
import React from 'react';
import './Header.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => {
    return (
        <section className=''>
            <div className='bg-light headers overflow-hidden position-relative'>
                <Row>
                    <Col md={6}>
                        <div className=" w-100 h-100 d-flex justify-content-center align-items-center p-5">
                            <div className="w-75 d-flex flex-column justify-content-center align-items-start py-5">
                                <h4>Rent a car in <span className='dubai'>Dubai</span></h4>
                                <h1 className='py-1 fw-bold text-dark'>Find your dreams car within a minute</h1>
                                <small className='text-muted fw-bold py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.</small>
                                <div className="d-flex justify-content-start align-items-center w-100 w-50">
                                    <Image src="/images/appstore.png" alt="appstore" width={100} height={50} loading='lazy'
                                        style={{ objectFit: "contain", borderRadius: '13px' }} />
                                    <Image src="/images/playstore.png" alt="palystore" width={100} height={50} loading='lazy' style={{ objectFit: "contain", borderRadius: '13px' }} className='ms-4' />
                                </div>

                            </div>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-end align-items-start">
                            <Image src="/images/header.png" alt="car" width={550} height={500} loading='lazy' style={{ objectFit: "contain" }} />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className=" d-flex justify-content-center align-items-end w-100 h-auto position-absolute top-100 ">
                <div className="bg-white shadow-sm w-75 rounded">
                    <div className="py-3 d-flex">
                        <Form className="d-flex rounded shadow-sm d-flex justify-content-center align-items-center text-center w-50">
                            <SearchIcon />
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 border-0 "
                                aria-label="Search"
                            />
                        </Form>
                        <div className="d-flex justify-content-center align-items-center border-end px-2 p-1 w-50">
                            <CalendarMonthIcon />
                            <div className="d-flex flex-column ms-2">
                                <span className=' text-muted'>Pick Up Date</span>
                                <span className='fw-bold text-dark'>Mon, 16 Jun</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center border-end px-2 p-1 w-50">
                            <AccessTimeIcon />
                            <div className="d-flex flex-column ms-2">
                                <span className=' text-muted'>Time</span>
                                <span className='fw-bold text-dark'>10:00</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center border-end px-2 p-1 w-50">
                            <CalendarMonthIcon />
                            <div className="d-flex flex-column ms-2">
                                <span className=' text-muted'>Drop off Date</span>
                                <span className='fw-bold text-dark'>Mon, 16 Jun</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <AccessTimeIcon />
                            <div className="d-flex flex-column ms-2">
                                <span className=' text-muted'>Time</span>
                                <span className='fw-bold text-dark'>10:00</span>
                            </div>
                        </div>
                        <Button className='baseBg border-0 fw-bold '>Search</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header