const users = require('../utils/users')

const login = (req, res) =>{
const {email, password} = req.query
const user = users.find(us.email === email && us.password === password)
user ? res.json({acces: true}) : res.status(401).json({acces: false})
}

module.export = login