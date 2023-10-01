import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const Offer = () => {
    return (
        <Container className='mt-4 mb-5'>
            <div className="d-flex ">
                <Image src="/images/offer.png" width={1120} height={500}  className=''
                style={{ objectFit: 'contain', borderRadius:'15px' }} loading='lazy' />
            </div>
        </Container>
    )
}

export default Offer