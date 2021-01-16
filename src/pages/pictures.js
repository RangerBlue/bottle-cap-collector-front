import React from "react"
import picture1 from '../pictures/album1.jpg';
import picture2 from '../pictures/album2.jpg';
import picture3 from '../pictures/album3.jpg';
import { Carousel } from 'react-bootstrap'

const Pictures = () => {
    return (
        <div class="container">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={picture1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={picture2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={picture3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Pictures