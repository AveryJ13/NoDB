const players = []
let id = 0
module.exports = {
    getStat: (req, res) => {
        res.status(200).send(players)
    },
    addPlayer: (req, res) => {
        
        const {player} = req.body
        const newPlayer = {
            id: id,
            name: player
        }
        id++
        players.push(newPlayer)
        res.status(200).send(players)
    },
    editPlayer: (req, res) => {
        console.log(req.body)
        const {id} = req.params
        const {name} = req.body
        console.log(name)
        const index = players.findIndex(element => {
            return element.id === +id
        })

        players[index].name = name

        res.status(200).send(players)
    },
    editTierPlayer: (req, res) => {
        res.status(200).send(players)
    },
    deletePlayer: (req, res) => {
        const {deleteId} = req.params
        const index2 = players.findIndex(element => {
            return element.id === +deleteId
        })
        players.splice(index2, 1)
        res.status(200).send(players)
        
    }
}