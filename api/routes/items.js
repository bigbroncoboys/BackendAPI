const { Router } = require('express');
const itemsRouter = Router();

itemsRouter.get('/:accountID', require('../controllers/items/getItems'));
itemsRouter.put('/:accountID', require('../controllers/items/updateItems'));

module.exports = itemsRouter