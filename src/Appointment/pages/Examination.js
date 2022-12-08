import io from 'socket.io-client'
import { useState, useEffect } from 'react'
// import ProfileCard from '../../../components/profileCard/ProfileCard'
// import VerStepper from '../../../components/stepper/Stepper'
import QrCard from '../components/qrCard/QrCard'
import CounterCard from '../components/counterCard/CounterCard'

// import { Typography, Box, ButtonGroup, Button } from '@mui/material';

import { useParams } from 'react-router-dom'



const socket = io.connect(process.env.REACT_APP_BACKEND_URL)


export default function Examination(props) {
  //kiem tra ton record cho appId nay chua? neu co roi thi load record
  //chua co tao record moi


  const [order, setOrder ] = useState(0)
  const [currOrder, setCurrOrder ] = useState(0)
  const [status, setStatus] = useState(false)
  const { id } = useParams()

  const fetchSession = ()=> {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/appointment-app/${id}/session`)
      .then((res) => res.json())
      .then((data) => {
        console.log('received data obj ', data)
        setCurrOrder(data.currOrder)
        setOrder(data.order)
        setStatus(data.isQueue)
      })
  }

  useEffect(()=> {
    socket.emit('enter_pool', id)
    fetchSession()

    socket.on('update_session',() => {
      console.log('fetching...')
      fetchSession()
    })
    socket.on('session_complete', () => {
      console.log('finish queue')
    })

  },[socket])

  // const nextStep = () => {setStep(currStep => currStep+1)}
  // const prevStep = () => {setStep(currStep => currStep-1)}

  console.log('is queuing?', status)
  return (
    <div className='Appointment Home'
          style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent: "center"}}>
      {
        {
          false: <QrCard/>,
          true:
            <div>
            <CounterCard order={order} currentOrder={currOrder} orderPickedTime='14:30'/>
            </div>

        }[status]
      }
    </div>
  )
}