
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to store data
  const [interest,setInterest]= useState(0)
  const [principle, setPrinciple]= useState(0)
  const [rate, setRate] =useState(0)
  const [year, setYear]=useState(0)
  const [principleAmountValid,setPrincipleAmountValid]=useState(true)
  const [rateAmountValid ,setRateAmountValid]=useState(true)
  const [yearAmountValid ,setYearAmountValid]=useState(true)
console.log(principle);
const handleReset =()=>{
  console.log('Inside handle reset function');
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setPrincipleAmountValid(true)
  setRateAmountValid(true)
  setYearAmountValid(true)

}
const handleValidation =(tag)=>{
  console.log('inside handle validation');
  const {value, name}=tag
  console.log(value,name);
  console.log(!! value.match(/^[0-9]*.?[0-9]+$/) );
if(!!value.match( /^\d*\.?\d*$/)){
  if(name=='principle'){
setPrinciple(value)
setPrincipleAmountValid(true)

  }else if(name=='rate'){
    setRate(value)
setRateAmountValid(true)

  }else{
    setYear(value)
setYearAmountValid(true)
setYearAmountValid(true)

  }
}else{
  if(name=='principle'){
    setPrinciple('value')
    setPrincipleAmountValid(false)
    
  }else if(name=='rate'){
    setRate(value)
setRateAmountValid(false)

  }else{
    setYear(value)
setYearAmountValid(false)

  }
}
}
const handleCalculate=()=>{
  if(principle && rate && year){
    setInterest(principle*year*rate/100)

  }else{
    alert('please fill the form completly')
  }
}
  return (
    <>
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
  <div style={{width:'600px'}} className='bg-light p-5 rounded'>
  <h3> Simple Interest App</h3>
  <p>calculate your simple interest easily</p>
  <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light '>
<h1>₹ {interest}</h1>
<p className='fw-bolder'> Total Simple interest </p>
  </div>
  <form  className="mt-5">
    {}
    <div className="mb-3">
    <TextField id="outlined-basic-principle" label="₹Principle Amount" variant="outlined" name='principle' value ={principle||""} onChange={e=>handleValidation(e.target)} />
    </div>
   { !principleAmountValid && <div className="text-danger mb-3">Invalid Principle Amount</div>}

    {}
    <div className="mb-3">
    <TextField id="outlined-basic-rate" label="rate of intrest (p.a) %" variant="outlined" name='rate' value={rate || ""} onChange={e=>handleValidation(e.target)} />
    </div>
{!rateAmountValid && <div className='text-danger-mb-3 '>Invalid Rate Amount</div>}
    {}
    <div className="mb-3">
    <TextField id="outlined-basic-time" label="Time period(yr)" variant="outlined" name='year' value={year || ""} onChange={e=>handleValidation(e.target)} />
    </div>
    {!yearAmountValid && <div className='text-danger-mb-3 '>Invalid Year</div>}


    {}
    <Stack direction="row" spacing={2}>
    <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{width:'50%',height:'70%'}} className='bg-dark' variant='contained'>CALCULATE
            </Button>
            <Button onClick={handleReset} style={{width:'50%',height:'70%'}}  variant='outlined'>RESET
            </Button>
          </Stack>
          </Stack>
  
    
  </form>

  </div>

    </div>
    </>
  )
}

export default App
