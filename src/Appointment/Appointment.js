import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const appRoot = '/appointment-app'

//day la entry point cua app thuc hien kham benh
//folder Appointment se dc to chuc nhu 1 react app, trong do App.js == Appointment.js (file nay)

export default function Appointment() {
  return (
    <>
      <h1>sand box here</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to={appRoot+'/a'}>A</Link></li>
            <li><Link to={appRoot+'/b'}>B</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path={appRoot+'/a'}>
            <h1>this is a</h1>
          </Route>
          <Route path={appRoot+'/b'}>
            <h1>this is b</h1>
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  )
}
