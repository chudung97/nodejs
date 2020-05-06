// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;

const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');
var bodyParser = require('body-parser');

var urlencodedParser  = bodyParser.json();

router.get('/test',urlencodedParser, user_controller.test);
router.post('/create', urlencodedParser, user_controller.user_create);

// router.get('/:id', product_controller.product_details);
// router.put('/:id/update',urlencodedParser, product_controller.product_update);
// router.delete('/:id/delete', product_controller.product_delete);

// router.post('/users', async (req, res) => {
//     // Create a new user
//     try {
//         console.log(req);
//         const user = new User(req.body)
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({ user, token })
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
//
// router.post('/users/login', async(req, res) => {
//     //Login a registered user
//     try {
//         const { email, password } = req.body
//         const user = await User.findByCredentials(email, password)
//         if (!user) {
//             return res.status(401).send({error: 'Login failed! Check authentication credentials'})
//         }
//         const token = await user.generateAuthToken()
//         res.send({ user, token })
//     } catch (error) {
//         res.status(400).send(error)
//     }
//
// })

module.exports = router;
