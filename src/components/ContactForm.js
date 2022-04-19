import { useState, useRef } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phonenumber, setPhonenumber ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ submitted, setSubmitted ] = useState(false)

  const form = useRef()

  function handleInquiry(e) {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_xo2m1fa', form.current, 'ZQ4IeSMNGbqfY2kjd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setSubmitted(true)
      window.scrollTo(0, 0)
  }

  return (
      <form ref={form} onSubmit={handleInquiry} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        { submitted ?
          <Alert variant='outlined' severity='success' sx={{width: '50%', mb: '20px', display: 'flex', justifyContent: 'center'}}>
            <strong>Inquiry successfully sent!!</strong>
          </Alert> 
          : 
          null
        }
        <TextField label='First Name' name='firstname' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setFirstname(e.target.value)}/>
        <br />
        <TextField label='Last Name' name='lastname' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setLastname(e.target.value)}/>
        <br />
        <TextField label='Email' name='email' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <TextField label='Phone Number' name='phonenumber' variant='outlined' color='secondary' required sx={{width: '50%'}} onChange={(e) => setPhonenumber(e.target.value)}/>
        <br />
        <TextField label='Message' name='message' variant='outlined' color='secondary' required multiline maxRows={3} sx={{width: '50%'}} onChange={(e) => setMessage(e.target.value)}/>
        <br />
        <br />
        <Button type='submit' variant='contained' size='large' sx={{borderRadius: '0px', width: '25%', bgcolor: '#000000', paddingTop: '10px', paddingBottom: '10px'}}>
          <strong>Send</strong>
        </Button>
      </form>
  )
}

export default ContactForm