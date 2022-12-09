import { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, ButtonGroup,
  Table, TableHead, TableBody, TableCell, TableRow} from '@mui/material'
import { useParams } from 'react-router-dom'

const baseURL = 'http://api.alodoctor.space'




export default function Doctor(props) {
  const [appId, setAppId] = useState('') //de enqueue
  const [total, setTotal] = useState(0)
  const [currOrder, setCurrOrder] = useState(0)
  const [processingApp, setProcessingApp] = useState('')


  const { doctorid } = useParams()

  const fetchSession = () => {
    fetch(`${baseURL}/api/v1/appointment-app/doctor/${doctorid}/session`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          console.log('doctor session', data)
          setTotal(data.total)
          setCurrOrder(data.currOrder)
          setProcessingApp(data.currAppID)
        }
      })
      .catch(e => console.log('cannot fetch', e))
  }
  const enqueuePatient = () => {
    const data = new URLSearchParams({
      'doctorid': doctorid,
      'appid': appId
    })
    fetch(`${baseURL}/api/v1/appointment-app/doctor/enqueue`, {
      method: 'POST',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      body: data.toString()
    })
    fetchSession()
  }
  const nextPatient = () => {
    const data = new URLSearchParams({
      'doctorid': doctorid
    })
    fetch(`${baseURL}/api/v1/appointment-app/doctor/next`, {
      method: 'POST',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      body: data.toString()
    })
    fetchSession()
  }
  const dequeuePatient = () => {
    const data = new URLSearchParams({
      'doctorid': doctorid
    })
    fetch(`${baseURL}/api/v1/appointment-app/doctor/dequeue`, {
      method: 'POST',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      body: data.toString()
    })
    fetchSession()
  }
  useEffect(()=> {
    fetchSession()

  }, [])
  return (
    <div className="doctor-page">
    <Box sx={{ flexGrow: 1 }}>
      <h1>Doctor queue manager</h1>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            label="appoinment ID"
            variant="outlined"
            fullWidth
            onChange={(e)=> setAppId(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup variant='contained'>
            <Button onClick={enqueuePatient}>Enqueue patient</Button>
            <Button onClick={nextPatient}>Next patient</Button>
            <Button onClick={dequeuePatient}>Dequeue patient</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Total in queue</TableCell>
                <TableCell>Current order number</TableCell>
                <TableCell>Current processing appoinment (ID)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{total}</TableCell>
                <TableCell>{currOrder}</TableCell>
                <TableCell>{processingApp}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
