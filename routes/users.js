const express = require('express')
const User = require('../models/User')
const router = express.Router()


//Getting all
router.get('/', async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})
//Getting one
router.get('/:id', getUser, (req, res) =>{
    res.send(res.user)
})
//Creating one
router.post('/', async (req, res) =>{
    const user = new User({
        name: req.body.name
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})
//Updating one
router.patch('/:id', getUser, async (req, res) =>{//use instead of put so only information passed will be updated
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch(err){
        res.status(400).json({ message: err.mesage })
    }
})
//Deleting one
router.delete('/:id', getUser, async (req, res) =>{
    try{
        await res.user.remove()
        res.json({ message: 'Deleted User'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

async function getUser(req, res, next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    }catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user
    next()
}

module.exports = router