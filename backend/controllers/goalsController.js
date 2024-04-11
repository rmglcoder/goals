const Goals = require('../models/goalsModel')
const mongoose = require('mongoose')

//  GET all goals
const getGoals = async (req, res) => {
    const goals = await Goals.find({}).sort({createdAt: -1})

    res.status(200).json(goals)
}


//  GET a single goal
const getGoal = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goals'})
    }

    const goal = await Goals.findById(id)

    if (!goal) {
        return res.status(404).json ({error: 'No such goals'})
    }
    res.status(200).json(goal)
}



//  CREATE a workout
const createGoal = async (req, res) => {
    const {title, description, completed} = req.body

    // add doc to db
    try {
        const goal = await Goals.create({title, description, completed})
        res.status(200).json(goal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//  DELETE a goal

const deleteGoal = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goal'})
    }

    const goal = await Goals.findOneAndDelete({_id: id})

    if (!goal) {
        return res.status(400).json ({error: 'No such goal'})
    }

res.status(200).json(goal)

}


//  UPDATE a goal

const updateGoal = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goal'})
    }

    const goal = await Goals.findOneAndUpdate({_id: id}, {
        ...req.body 
    })
    if (!goal) {
        return res.status(400).json ({error: 'No such goal'})
    }

    res.status(200).json(goal)

}

module.exports = {
    getGoal,
    getGoals,
    createGoal,
    deleteGoal,
    updateGoal
}