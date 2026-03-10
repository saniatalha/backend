const express = require('express')
const fruitsRouter = express.Router();
const fruitsController = require('../controllers/fruitcontrollers')

fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get('/:name', fruitsController.showFruit)
fruitsRouter.post('/', fruitsController.createFruit)
fruitsRouter.patch('/:name', fruitsController.updateFruit)
fruitsRouter.delete('/:name', fruitsController.destroyFruit)


module.exports = fruitsRouter