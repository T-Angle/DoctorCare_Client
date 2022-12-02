
import ProfileCard from '../../components/profileCard/ProfileCard'
import VerStepper from '../../components/stepper/Stepper'

import Typography from '@mui/material/Typography';


const expectedApiData = {
  time: "10h30",
  createdDate: "10/2/2022",

}

export default function Examination(props) {
  //kiem tra ton record cho appId nay chua? neu co roi thi load record
  //chua co tao record moi


  return (
    <div className='Appointment Home'
          style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent: "center"}}>
      <Typography>test</Typography>
      <Typography>Home page for examination of appointment {props.id} </Typography>
      <ProfileCard />
      <VerStepper />
    </div>
  )
}
