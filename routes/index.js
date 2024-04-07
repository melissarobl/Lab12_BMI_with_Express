const express = require('express')
const router = express.Router()
// router object figures out what code to run in response to a request.
// typically based on the URL, and the method (GET, POST...)

// responds to get request to home page, which here is the main form
router.get('/', function(req, res, next) {
    // name of Handlebars File - name of a template, optional object with data for the template
    res.render('index',{
        title: 'Body Mass Index Calculator'
    })
})

//route handler responds to get request to navigate to /calculate and show the bmi_calculated file page
//when it finds the location of the GET, it runs the function, which is calculating BMI using the input from the query
//then it renders (shows) the bmi on the page (bmi_calculated) where 'bmi' is called in {{}}
router.get('/calculate', function(req, res, next) {

    const formData = req.query  //define a variable to the information in the
    const bmi = formData['weight_kilos'] / (formData['height_meters'] * formData['height_meters'])
    // because names of data have _, must use []. Without _ , it would just be formData.weight (for example)

    res.render('bmi_calculated', {

        bmi: bmi.toFixed(2)

    })
})


module.exports = router //this line needs to be the very last line!



