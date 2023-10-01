"use client"  /// if u are using client components then please use "use client"
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Dropdown } from 'react-bootstrap';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Topbar = () => {
  return (
    <section>
      <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/images/logo.png" alt="" width={100} height={50} style={{ objectFit: 'contain' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center algin-iems-center text-center">

              <Dropdown className='ms-2'>
                <Dropdown.Toggle variant="light fw-bold text-secondary" id="dropdown-basic" size="sm">
                  Rent a Car
                  <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='ms-2'>
                <Dropdown.Toggle variant="light fw-bold text-secondary" id="dropdown-basic" size="sm">
                  Brands
                  <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='ms-2'>
                <Dropdown.Toggle variant="light fw-bold text-secondary" id="dropdown-basic" size="sm">
                  Rent a Yacht
                  <KeyboardArrowDownIcon style={{ fontSize: '1.2rem' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Dollar</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">BDT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link href="#home" style={{ fontSize: '.94rem' }} className='fw-bold text-secondary px-2 p-1'>Promotions</Nav.Link>
              <Nav.Link href="#home" style={{ fontSize: '.94rem' }} className='fw-bold text-secondary px-2 p-1'>Contact Us</Nav.Link>
              <Nav.Link href="#home" style={{ fontSize: '.94rem' }} className='fw-bold text-secondary px-2 p-1'>Login</Nav.Link>
              <Nav.Link href="#home" style={{ fontSize: '.94rem' }} className='fw-bold text-secondary'>
                <span className=' border-0 baseBg rounded text-white px-2 p-2' size='sm'>Get started <KeyboardArrowRightIcon /></span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  )
}

export default Topbar