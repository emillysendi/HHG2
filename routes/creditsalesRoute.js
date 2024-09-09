const express = require('express');
const router = express.Router();
// Import models
router.get("/creditsales", (req, res) => {
    res.render("creditsales");
    
  });
 
  module.exports = router;