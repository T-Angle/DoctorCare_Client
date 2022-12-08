// for import mui component
import Card from '@mui/material/Card'
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

//for import  react hook
import { useEffect, useState } from 'react';

//for import object/data model from models
// import Profile from '../../models/ProfileModel'

//idea: khi co danh sach xet nghiem can lam, BE se luu danh sach xet nghiem
//va stt hang doi cua moi xet nghiem, stt nay ko the thay doi, chi co the xoa di
// card nay cung hien thi stt dang lam xet nghiem hien tai
// tam thoi se ko co live update stt hien tai

//counter la con cua 1 container khac nhu gap bac si, lam xet nghiem
//container cha quyet dinh co render counter hay ko

const expectedSampleProps = {
  order: 32,
  currentOrder: 2,
  orderPickedTime: "16:30"

}

export default function CounterCard(props) {
  const yourOrderNum = props.order ? props.order : 'N/A'
  const currentOrderNum = props.currentOrder ? props.currentOrder: 'N/A'
  const pickedTime = props.orderPickedTime ? props.orderPickedTime : 'N/A'

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
    <Card className="card counter"  sx={{ maxWidth: 345 }}>
      <CardHeader
        className="card counter header"
        titleTypographyProps={{ fontSize: "14px", padding: "0px" }}
        title={`Order number picked at ${pickedTime}, \n Your order number is`}
      />
      <CardContent className="card counter content" style={{ padding: "10px" }}>
        <Typography variant="h1" align="center" style={{ fontSize: "60px" }}>
          {yourOrderNum}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Current processing number is {currentOrderNum}, there are{" "}
          {yourOrderNum - currentOrderNum - 1} people left in queue until your
          turn
        </Typography>
      </CardContent>
    </Card>
  </div>
);
}
