var express = require("express")
var axios = require("axios")
var router = express.Router();

// Route for checking username/email availability
router.get('/users/check', async (req, res) => {
    try {
      const { username } = req.query;
  
      // Make a request to the Showwcase API to authenticate the user
      const response = await axios.post('https://api.showwcase.com/auth/login', {
        username,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '33aad596f8a1d0d8ae0267f8cb163150ae49b9eca11b98ee50' // Replace YOUR_API_KEY with your actual API key
        }
      });

      const token = response.data.token;
  
      // Return the response from the Showcase API
      res.json(token);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred' });
    }
  });

module.exports = router;