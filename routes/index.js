const express = require('express')
const router = express.Router()
// router object figures out what code to run in response to a request.
// typically based on the URL, and the method (GET, POST...)

// responds to get request to home page, which here is the form
router.get('/', function(req, res, next) {
    // name of Handlebars File - name of a template, optional object with data for the template
    res.render('index',{
        title: 'Body Mass Index Calculator'
    })
}) //get request to the home page

//route handler responds to get request to navigate to /calculate and show the bmi_calculated file page
//when it finds the location of the post, it runs the function, which is calculating BMI
//then it renders (shows) the bmi on the page where bmi is called in {{}}
router.get('/calculate', function(req, res, next) {

    const formData = req.query  //define a variable to the information in the
    const bmi = formData['weight_kilos'] / (formData['height_meters'] * formData['height_meters'])
    res.render('bmi_calculated', {

        bmi: bmi.toFixed(2)

    })
})
// because names of data have _, must use []. Without _ , it would just be formData.weight (for example)



module.exports = router //this line needs to be the very last line!



