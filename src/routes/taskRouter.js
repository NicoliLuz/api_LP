const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controllers/taskController');

router.post('/store/post', storeTask);

module.exports = router;