"use client"
import React from 'react'
import './TopHeader.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Image from 'next/image'
import Dropdown from 'react-bootstrap/Dropdown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopHeader = () => {
  return (
    <section className="baseBg">
      <Container className='py-2'>
        <Row>
          <Col md={8}>
            <Dropdown>
              <Dropdown.Toggle variant="light fw-bold text-dark" id="dropdown-basic" size='sm'>
                UAE <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Qatar</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Dubai</Dropdown.Item>
                <Dropdown.Item href="#/action-1">KSA</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-end align-items-center">
              <Dropdown>
                <Dropdown.Toggle variant="light fw-bold text-dark" id="dropdown-basic" size="sm">
                  <Image src="/images/uae.png" alt="uae" width="20" height="20" style={{ objectFit: 'contain' }} /> English
                  <KeyboardArrowDownIcon style={{ fontSize: '1.3rem' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">KSA</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">BD</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className='ms-2'>
                <Dropdown.Toggle variant="light fw-bold text-dark" id="dropdown-basic" size="sm">
                  <AccountBalanceWalletIcon style={{ fontSize: '1.2rem' }}/> AED
                  <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>


            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default TopHeader