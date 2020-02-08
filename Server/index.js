const express = require('express')
const cors = require('cors')
const app = express()
const controller = require('./Controller')

app.use(express.json())
app.use(cors())

const port = 4040

app.get('/api/tier-list', controller.getStat)
app.post('/api/tier-list', controller.addPlayer)
app.put('/api/tier-list/:id', controller.editPlayer)
app.put('/api/tier-list/:id', controller.editTierPlayer)
app.delete('/api/tier-list/:deleteId',controller.deletePlayer)

app.listen(port, () => {console.log(`listening on ${port}`)})