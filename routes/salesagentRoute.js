const express = require('express');
const router = express.Router();
// Import models
router.get("/salesagent", (req, res) => {
    res.render("salesagentdashboard");
    
  });
 
  module.exports = router;