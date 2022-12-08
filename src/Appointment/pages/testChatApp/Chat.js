import io from 'socket.io-client'
import { useState, useEffect } from 'react'



const socket = io.connect("http://localhost:5000")



export default function Chat() {
  const [sendMsg, setSendMsg] = useState('')
  const [recvMsg, setRecvMsg] = useState('')

  const sendMessage = () => {
    socket.emit("send_message", {sendMsg})
  }

  useEffect (() => {
    socket.on("receive_message", (data) => {
      let msg = recvMsg + data.sendMsg
      console.log(msg)
      setRecvMsg(recvMsg => recvMsg + data.sendMsg)

    })
  },[socket])

  return (
    <div className="chat-app">
      <textarea readOnly value={recvMsg} ></textarea><br/>
      <input onChange={e => setSendMsg(e.target.value)} placeholder="Message..."/>
      <button onClick={sendMessage}> Send msg </button>
    </div>
  )
}
