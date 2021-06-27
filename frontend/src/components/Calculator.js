import {React,useState} from 'react'
import { Container } from 'reactstrap'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import { Radio, RadioGroup} from 'react-radio-group'



const Calculator = () => {
  const [tariff,setTariff]=useState('torrent')
  const [type,setType]=useState('torrent')
  const [provider,setProvider]=useState('residential')
  const [previousBillAmount,setPreviousBillAmount]=useState('')
  const [pastImportUnits,setPastImportUnits]=useState('')
  const [pastExportUnits,setPastExportUnits]=useState('')
  const [presentImportUnits,setPresentImportUnits]=useState('')
  const [presentExportUnits,setPresentExportUnits]=useState('')
  const torrentTariff = {
    fixedChargePerMonth:25,
    firstFiftyUnits : 3.20,
    nextFiftyUnits : 3.90,
    remaining : 4.90,
    govtDuty:15
   }
   let bill ={}




  const submitHandler =(e)=>{
   
    e.preventDefault()
    console.log('Inside Function')
    bill = torrentCalculator()
    console.log(bill)

  }   

  const torrentCalculator = () =>{
    let result = {}
    console.log('Inside Torrent Calculator')
    let netUnitsImported = presentImportUnits - pastImportUnits
    let netUnitsExported = presentExportUnits - pastExportUnits
    console.log(netUnitsImported,netUnitsExported)
    if(netUnitsImported>netUnitsExported)
 
     { console.log('Due')
     let netUnits = netUnitsImported -netUnitsExported
        result.fixedCharge = 2* torrentTariff.fixedChargePerMonth
        if(netUnits<50){
          result.energyCharge = netUnits * 3.20
        }
        if(netUnits<150 && netUnits>50){
          result.energyCharge = (50 * 3.20) + ((netUnits-50) * 3.90)
        }
        if(netUnits>150){
          result.energyCharge = (50 * 3.20) + (150*3.90) + ((netUnits-200)*4.90)
        }
        result.cred = 0 
    
      }
    else  {
    console.log('Cred')
    result.fixedCharge = 2* torrentTariff.fixedChargePerMonth
    result.energyCharge = 0
    result.cred = (netUnitsExported-netUnitsImported)*2.25 
    }

    result.amountWithoutDuty =   result.fixedCharge+result.energyCharge
    result.govtDuty = (15* result.amountWithoutDuty)/100
    result.withDuty = result.amountWithoutDuty +result.govtDuty

    result.totalAmountThisMonth =  (result.amountWithoutDuty+ result.govtDuty) - result.cred

    if(type==='Due'){
      result.totalAmountThisMonth =  (result.amountWithoutDuty+ result.govtDuty) - result.cred - previousBillAmount
    }

    return result
  }
  
 
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
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                <FormGroup controlId="tariff">
                   <FormLabel>Example select</FormLabel>
                   <FormControl as="select" value={tariff}
                    onChange={(e)=>setTariff(e.target.value)}>
                     <option>Residential</option>
                     {/* <option>Industrial</option> */}

                  </FormControl>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="provider">
                   <FormLabel>Discom Provider</FormLabel>
                   <FormControl as="select" value={provider}
                    onChange={(e)=>setProvider(e.target.value)}>
                     {/* <option>PGVCL</option>
                     <option>UGVCL</option>
                     <option>MGVCL</option>
                     <option>DGVCL</option>
                     <option>MGVCL</option> */}
                     <option>Torrent</option>
                  </FormControl>
                  </FormGroup>
                </Col>

         
                
                <Col md={6}>
                  <FormGroup controlId="previousBill">
                   <FormLabel>Previos Bill Amount</FormLabel>
                   <FormControl type="text" value={previousBillAmount}
                    onChange={(e)=>setPreviousBillAmount(e.target.value)}/>
                  </FormGroup>
                </Col>

                <Col md={12}>
                <RadioGroup id='radio-group' name="fruits" onChange={(e) => setType(e)}>
                    <Radio value="Credited" className="radio-button" />Credited
                    <Radio value="Due" id='radio' />Due
                </RadioGroup>
                </Col>
                <Col md={12}>
                  <p>Past Bill Reading:-</p>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="pastImport">
                   <FormLabel>Import Units</FormLabel>
                   <FormControl type="text" value={pastImportUnits}
                    onChange={(e)=>setPastImportUnits(e.target.value)}/>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="field1">
                   <FormLabel>Export Units</FormLabel>
                   <FormControl  type="text" value={pastExportUnits}
                    onChange={(e)=>setPastExportUnits(e.target.value)}>
                   </FormControl>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <p>Present Meter Reading:-</p>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="field1">
                   <FormLabel>Import Units</FormLabel>
                   <FormControl type="text" value={presentImportUnits}
                    onChange={(e)=>setPresentImportUnits(e.target.value)}/>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="field1">
                   <FormLabel>Export Units</FormLabel>
                   <FormControl type="text" value={presentExportUnits}
                    onChange={(e)=>setPresentExportUnits(e.target.value)}>
                   </FormControl>
                  </FormGroup>
                </Col>


                <Col md={12}>
                  <Button type='submit'>Calculate</Button>
                </Col>
              </Row>
             </Form>
              </Container>



           
        </div>
       

    )
}

export default Calculator
