const express = require('express');
const router = express.Router();
const managersCtrl = require('../controllers/managers');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, managersCtrl.index);
router.put('/:id', checkAuth, managersCtrl.update);



/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;