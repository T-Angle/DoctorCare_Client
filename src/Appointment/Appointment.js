import io from 'socket.io-client'
import { useState, useEffect } from 'react'

import QrCard from './components/qrCard/QrCard'
import CounterCard from './components/counterCard/CounterCard'

import { useParams } from 'react-router-dom'

const socket = io.connect(process.env.REACT_APP_BACKEND_URL)


export default function Appointment() {
  //kiem tra ton record cho appId nay chua? neu co roi thi load record
  //chua co tao record moi


  const [order, setOrder ] = useState(0)
  const [currOrder, setCurrOrder ] = useState(0)
  const [status, setStatus] = useState(false)
  const { id } = useParams()

  const fetchSession = ()=> {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/appointment-app/${id}/session`)
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
          false: <QrCard appointmentId={id}/>,
          true:
            <div>
            <CounterCard order={order} currentOrder={currOrder} orderPickedTime='14:30'/>
            </div>

        }[status]
      }
    </div>
  )
}





// //import router
// import { Route, Switch, Link, BrowserRouter, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// //import component
// // import CounterCard from './components/counterCard/CounterCard'
// // import QrCard from './components/qrCard/QrCard'
// // import Chat from './pages/testChatApp/Chat'
// import Examination from './pages/Examination'
// // import Navigation from './components/navigation/Navigation'
// // import HomeIndex from '../pages/Home/index'
// import { Toolbar } from '@mui/material'
//
// const baseURL = "/appointment-app/"
//
// function DevTestsPage() {
//   return (
//     <>
//       <QrCard/>
//       <CounterCard order='15' currentOrder='2' orderPickedTime='14:30'/>
//
//     </>
//   )
// }
//
// function DevTreatmentPage() {
//   return (
//     <>
//       <h1>Treatment page</h1>
//     </>
//   )
// }
// //day la entry point cua app thuc hien kham benh
// //folder Appointment se dc to chuc nhu 1 react app, trong do App.js == Appointment.js (file nay)
//
// export default function Appointment() {
//
//   // const [currentPath, setCurrentPath] = useState('')
//   //
//   // const getCurrentPath = (url) => {
//   //   setCurrentPath(url)
//   // }
//   //
//   // console.log('current path',currentPath)
//
//   let { id } = useParams();
//
//   console.log(id)
//   return (
//       <div className="Appointment">
//         <Toolbar/>
//         <BrowserRouter>
//           {(currentPath == '/') ? <></> : <Navigation id={id} tellCurrentPath={getCurrentPath}/>}
//           <Switch>
//
//             <Route exact path={baseURL + id + "/"} component={Examination}/>
//             <Route exact path={baseURL + id +"/tests"} render={props => <DevTestsPage {...props}/>} />
//             <Route exact path={baseURL + id +"/treatment"} render={props => <DevTreatmentPage {...props}/>} />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//
// }
