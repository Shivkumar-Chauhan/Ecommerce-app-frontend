import { Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import NewsLetter from '../Templates/NewsLetter'
import '../../Styles/Home/HomePage.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Garentee from '../../Assets/Home/garentee.svg';
import Happy from '../../Assets/Home/happy.svg';
import BasicProduct from '../Templates/BasicProduct';
import Image1 from '../../Assets/Home/products/img1.png';
import Image2 from '../../Assets/Home/products/img2.png';
import Image3 from '../../Assets/Home/products/img3.png';
import Image4 from '../../Assets/Home/products/img4.png';
import Arrivals from './Arrivals';
import ChoodingReason from './ChoodingReason';
import RecommendProducts from './RecommendProducts'
import DefaultModal from '../Templates/DefaultModal'

function HomePage() {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <>
        {/* <DefaultModal/> */}
            <div className="HomeContainer">
                <Header />
                <Container className='homeHeadingContainer'>
                    <div className="homeheading">
                        <h1>Sale of the summer collection</h1>
                    </div>
                    <div className="shopButton">
                        <button><ArrowForwardIcon /></button>
                        <span>SHOP HERE</span>
                    </div>

                </Container>
                <Grid className='homeFeatures' container spacing={2}>
                    <Grid className="homeFeaturesContainer" item md={9} sm={12}>
                        <section className="features">
                            <div className="feature">
                                <div>
                                    <LocalShippingOutlinedIcon />
                                </div>
                                <div className="featuredetails">
                                    <h3>Free Shipping</h3>
                                    <p>On purchases over $199</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div>
                                    <img src={Happy} alt="" />
                                </div>
                                <div className="featuredetails">
                                    <h3>99% Satisfied Customers</h3>
                                    <p>Our clients' opinions speak for themselves</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div>
                                    <img src={Garentee} alt="" />
                                </div>
                                <div className="featuredetails">
                                    <h3>Originality Guaranteed</h3>
                                    <p>30 days warranty for each product from our store</p>
                                </div>
                            </div>
                        </section>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <div className="homeArrows">
                            <Button variant="outlined"><ArrowBackIcon /></Button>
                            <Button variant="contained">< ArrowForwardIcon /></Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Arrivals />
            
            <RecommendProducts />
            <h1 className='centeredheading'>Why should you choose us?</h1>
            <ChoodingReason />
            <h1 className='centeredheading'>Products in today</h1>
            <div className="productsForTodayContainer">
                <BasicProduct image={Image1} title={"Basic Slim Fit T-Shirt"} price={79.99} />
                <BasicProduct image={Image2} title={"Loose Textured T-Shirt"} price={119.99} />
                <BasicProduct image={Image3} title={"T-Shirt Summer Vibes"} price={89.99} discount={true} discountPercentage={30} lastPrice={119.99} />
                <BasicProduct image={Image4} title={"Loose Knit 3/4 Sleeve"} price={119.99} />
            </div>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default HomePage
