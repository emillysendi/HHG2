const express = require('express');
const router = express.Router();
// Import models
router.get("/owner", (req, res) => {
    res.render("ownerdashboard");
    
  });
 
  module.exports = router;