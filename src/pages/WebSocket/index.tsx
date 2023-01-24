import { useEffect, useState } from "react";

import { io } from "socket.io-client";


export function WebSocket() {
  const [time, setTime] = useState({})
  console.log(time)
  useEffect(() => {
    const socket = io('wss://192.168.1.3:4443', {})
    console.log(socket)
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    })
    socket.on('time', (data) => setTime(data))
    socket.on('disconnect', () => setTime('server disconnected'))

  }, [])
  return (
    <div>

    </div>
  )
}