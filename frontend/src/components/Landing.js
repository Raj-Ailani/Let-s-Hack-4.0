import React from 'react'
import { Container,Row,Col,Button } from 'reactstrap'
import {  Link} from 'react-router-dom';
import ReactPlayer from 'react-player'

const Landing = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col id='landing-cont'>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <h2>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h2>
                    <Container fluid>
                    <Link to='/project'>  <Button id='landing-btn'>About Project</Button></Link>
                    <Link to='/about'> <Button id='landing-btn'>About Us</Button></Link>
                    </Container>
                    <Container fluid>
                    <Link to='/calculate'>   <Button id='landing-btn2'>Calculate Your Bill</Button></Link>
                    </Container>
                    </Col>
                    <Col id='landing-cont2'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=hw2_hEMgE4o&ab_channel=GreenPowerEnergy'  width='100%' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing
