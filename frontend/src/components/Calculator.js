import {React,useState} from 'react'
import { Container } from 'reactstrap'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
const Calculator = () => {

    return (
        <div>
            <Container fluid id='cal-cont'>
                <h1>Solar Meter Bill Calculator</h1>
            </Container>
            <Container id='cal-cont2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper purus sed nulla consequat, quis sodales risus suscipit. 
                    Vivamus quis lorem est. Donec placerat et tellus id semper. Aenean a cursus velit. Pellentesque scelerisque libero ut velit maximus, 
                    hendrerit dictum tristique.</p></Container>
            <Container id='form-cont'>
            <form class="row g-3">
<Col md={6}>
    <label for="inputEmail4" class="form-label">Field1</label>
    <input type="text" class="form-control" id="field1"/>
    </Col>
    <Col md={6}>
    <label for="inputPassword4" class="form-label">Field2</label>
    <input type="text" class="form-control" id="field2"/>
    </Col>
  <Col md={6}>
    <label for="inputAddress" class="form-label">Field3</label>
    <input type="text" class="form-control" id="field3"/>
    </Col>
  <Col md={6}>
    <label for="inputAddress2" class="form-label">Field4</label>
    <input type="text" class="form-control" id="field4" />
    </Col>
  <Col md={6}>
    <label for="inputCity" class="form-label">Field5</label>
    <input type="text" class="form-control" id="field5"/>
    </Col>
    <Col md={6}>
    <label for="inputCity" class="form-label">Field6</label>
    <input type="text" class="form-control" id="field6"/>
    </Col>

</form>
            </Container>
  
        </div>

    )
}

export default Calculator
