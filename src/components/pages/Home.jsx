import {Carousel} from 'react-bootstrap'

export default function Home() {
    return(
        <div>
            <h3>Welcome to Stu Knits - the e-commerce page to get yourself on the ever-growing queue of things for Emily to knit</h3>
            <h4>Carousel of things Emily has knit</h4>

            <Carousel className="mt-4">
                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/qSnbpLs.jpg"
                    alt="sweater vest"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/GH1AATG.jpg"
                    alt="green men's sweater"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/phInPIe.jpg"
                    alt="dog on a knit blanket"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/9vU9FLV.jpg"
                    alt="assorted stu knits materials with labels"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
 
                </Carousel>
        </div>

    )
}