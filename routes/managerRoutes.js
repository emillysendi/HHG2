const express = require('express');
const router = express.Router();
// Import models
router.get("/manager", (req, res) => {
    res.render("managerdashboard");
    
  });
 
  module.exports = router;