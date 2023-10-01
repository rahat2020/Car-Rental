import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Footer = () => {
  return (
    <div className='baseBg mt-4 pt-5'>
      <Container>
        <Row>
          <Col md={4}>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <Image src="/images/logo.png" alt="" width={200} height={60} style={{ objectFit: 'contain' }} />
              <p className='text-white fw-bold mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit explicabo tenetur ipsum voluptatibus sunt. Asperiores, temporibus iste? Expedita, adipisci.</p>
              <p className=' text-white fw-bold'><AddLocationAltIcon/> Dubai, UAE</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex flex-column justify-content-start align-items-start mt-4">
              <h4 className='text-white fw-bold border-bottom'>Quick links</h4>
              <div className="d-flex flex-column justify-content-start align-items-start">
                <span className='text-white cursor-pointer'>Terms & Conditions</span>
                <span className='text-white cursor-pointer'>Policy</span>
                <span className='text-white cursor-pointer'>Customer support</span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex flex-column justify-content-start align-items-start mt-4">
              <h4 className='text-white fw-bold border-bottom'>Contact Us</h4>

              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="your email"
                  className="me-2 border-0"
                />
                <Button variant='light fw-bold d-flex justify-content-center align-items-center '>Send <SendIcon style={{ fontSize: '.99rem' }} className='baseTColor ms-2' /></Button>
              </Form>
              <div className="d-flex pt-2 justify-content-between align-items-center gap-4">
                <div className="iconsBords">
                  <FacebookIcon />
                </div>
                <div className="iconsBords">
                  <TwitterIcon />
                </div>
                <div className="iconsBords">
                  <InstagramIcon />
                </div>
                <div className="iconsBords">
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer