// for import mui component
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

//for import  react hook
import { useEffect, useState } from "react";
import "./CounterCard.scss";

export default function CounterCard(props) {
  const yourOrderNum = props.order;
  const currentOrderNum = props.currentOrder;
  const pickedTime = props.orderPickedTime;
  console.log("current order", props.currentOrder);
  // let style = ''
  // (currentOrderNum == yourOrderNum) ? style='blink-num' : style='none'

  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
        position: "relative",
      }}
    >
      <Card className="card counter" sx={{ maxWidth: 345 }}>
        <CardHeader
          className="card counter header"
          titleTypographyProps={{ fontSize: "14px", padding: "0px" }}
          title={`Order number picked at ${pickedTime}, \n Your order number is`}
        />
        <CardContent
          className="card counter content"
          style={{ padding: "10px" }}
        >
          <Typography variant="h1" align="center" style={{ fontSize: "60px" }}>
            {yourOrderNum}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Current processing number is {currentOrderNum}, there are{" "}
            {yourOrderNum - currentOrderNum} people left in queue until your
            turn
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
