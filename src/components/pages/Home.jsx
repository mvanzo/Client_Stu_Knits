import {Carousel} from 'react-bootstrap'

export default function Home() {
    return(
        <div className='homepage content'>
            <h3 className='my-3'>Welcome to Stu Knits - the e-commerce page to get yourself on the ever-growing queue of things for Emily to knit</h3>

            <Carousel className="mt-4 carousel col-12 col-md-6 col-lg-4">
                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/qSnbpLs.jpg"
                    alt="sweater vest"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/GH1AATG.jpg"
                    alt="green men's sweater"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/phInPIe.jpg"
                    alt="dog on a knit blanket"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-75 center"
                    src="https://i.imgur.com/9vU9FLV.jpg"
                    alt="assorted stu knits materials with labels"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}