//import router
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom'

//import component
import CounterCard from './components/counterCard/CounterCard'
import QrCard from './components/qrCard/QrCard'
// import Chat from './pages/testChatApp/Chat'
import Examination from './pages/medExamination/Examination'
import Navigation from './components/navigation/Navigation'
import HomeIndex from '../pages/Home/index'
import { Toolbar } from '@mui/material'

const baseURL = "/appointment-app"

function DevTestsPage() {
  return (
    <>
      <QrCard/>
      <CounterCard order='15' currentOrder='2' orderPickedTime='14:30'/>

    </>
  )
}

function DevTreatmentPage() {
  return (
    <>
      <h1>Treatment page</h1>
    </>
  )
}
//day la entry point cua app thuc hien kham benh
//folder Appointment se dc to chuc nhu 1 react app, trong do App.js == Appointment.js (file nay)

export default function Appointment() {
  return (
      <div className="Appointment">
        <Toolbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeIndex} />
            <Route exact path={baseURL} component={Navigation}/>
            <Route exact path={baseURL + "/tests"} render={props => <DevTestsPage {...props}/>} />
            <Route exact path={baseURL + "/treatment"} render={props => <DevTreatmentPage {...props}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );

}