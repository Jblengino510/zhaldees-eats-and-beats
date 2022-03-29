import { useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactForm() {
  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phonenumber, setPhonenumber ] = useState('')
  const [ message, setMessage ] = useState('')

  function handleInquiry(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleInquiry} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <TextField label='First Name*' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setFirstname(e.target.value)}/>
      <br />
      <TextField label='Last Name*' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setLastname(e.target.value)}/>
      <br />
      <TextField label='Email*' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <TextField label='Phone Number' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setPhonenumber(e.target.value)}/>
      <br />
      <TextField label='Message' variant='outlined' color='secondary' required multiline maxRows={3} sx={{width: '50%'}} onChange={(e) => setMessage(e.target.value)}/>
      <br />
      <br />
      <Button type='submit' variant='contained' size='large' sx={{borderRadius: '0px', width: '25%', bgcolor: '#000000', paddingTop: '10px', paddingBottom: '10px'}}>
        <strong>Send</strong>
      </Button>
    </form>
  )
}

export default ContactForm