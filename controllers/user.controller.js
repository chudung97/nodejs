const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Chạy vô đây user nef');
};
exports.user_create = function (req, res, next) {
    // try {
    //     console.log(req.body);
    //     const user = new User(req.body)
    //     await user.save()
    //     const token = await user.generateAuthToken()
    //     res.status(201).send({ user, token })
    // } catch (error) {
    //     res.status(400).send(error)
    // }
console.log(req.body.name);
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password:req.body.password
        }
    );
    // const token =  user.generateAuthToken()
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};
// exports.product_details = function (req, res,next) {
//     Product.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };
// exports.product_update = function (req, res,next) {
//     Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//         if (err) return next(err);
//         res.send('Product udpated.');
//     });
// };
// exports.product_delete = function (req, res ,next) {
//     Product.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };