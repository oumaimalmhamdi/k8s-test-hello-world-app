import express from 'express'
import os from 'os'

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    const msg = 'hello from'+ os.hostname
    res.send(msg)
})

app.listen(port, ()=>{
    console.log('listening at port '+port)
})