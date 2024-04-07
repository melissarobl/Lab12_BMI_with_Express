const express = require('express')
const router = express.Router()
// router object figures out what code to run in response to a request.
// typically based on the URL, and the method (GET, POST...)

// responds to get request to home page
//request, response, next
router.get('/', function(req, res, next) {
    // name of Handlebars File - name of a template, optional object with data for the template
    res.render('index',{
        title: 'Body Mass Index Calculator'
    })
}) //get request to the home page

router.get('/calculate', function(req, res, next) {
    res.render('bmi_calculated')
})

router.post('/calculate', function(req, res, next) {
    const formData= req.body
    const bmi = formData['weight_kilos'] / (formData['height_meters'] * formData['height_meters'] )  // for a POST request


res.render('bmi_calculated', {
    bmi: bmi.toFixed(2)

    })
})

// return router object to whatever else needs file
module.exports = router //this line needs to be the very last line!