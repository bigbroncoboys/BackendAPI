const { Router } = require('express');
const itemsRouter = Router();

itemsRouter.get('/items/:accountID', require('../controllers/items/getItems'));
itemsRouter.put('/items/:accountID', require('../controllers/items/updateItems'));

module.exports = itemsRouter