const express = require('express')
const {
    createGoal,
    getGoal,
    getGoals,
    deleteGoal,
    updateGoal
} = require('../controllers/goalsController')

const router = express.Router()

router.get("/", getGoals)
router.get('/:id', getGoal)
router.post('/', createGoal)
router.delete('/:id', deleteGoal)
router.patch('/:id', updateGoal)

module.exports = router