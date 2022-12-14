import QRCode from "react-qr-code";
import {
  Card, CardContent, CardHeader, Typography, Button,
  CardActionArea, CardActions, Box
} from '@mui/material'

export default function QrCard(props) {
//nhan vao props la 1 ma so lich hen
  const expectedSampleProps = {
    appointmentId: "89321321983abc"

  }
  //test only
  const appointmentId = props.appointmentId ? props.appointmentId : '4032949934'

  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
        position: "relative"
      }}
    >
      <Card className="card qr" sx={{ maxWidth: 345 }}>
        <CardHeader
            className="card qr header"
            title="Scan this QR to start">
        </CardHeader>
        <CardContent>
          <QRCode

            value={appointmentId}
            level='Q'/>
        </CardContent>
        <CardActions>
            <Button size="medium">close</Button>
        </CardActions>
      </Card>
    </div>

  )




}
