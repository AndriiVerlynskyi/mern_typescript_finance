const Router = require('express');
const controller = require('./navBarController');

const router = new Router;

router.get('/getNavBarData', controller.getNavBarData);
router.post('/addNavBarData', controller.addNavBarData)

module.exports = router;