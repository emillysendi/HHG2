const express = require('express');
const router = express.Router();
// Import models
router.get("/stock", (req, res) => {
    res.render("stock");
    
  });
 
  module.exports = router;