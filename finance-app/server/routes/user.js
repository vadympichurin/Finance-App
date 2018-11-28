const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/user');

router.get('/', ctrlUsers.getUsers);
//
router.get('/log/:email', ctrlUsers.Login);
// router.get('/man/:email', (req,res) => {res.send(console.log(req.data))});
// router.get('/budget/:id', (req, res) => {
    // res.send(req.params.id);
    // const {category = null} = req.query;
    // res.send(req.params)}
    // res.send(category)}
// );
// router.get('/budget/:id', (req,res) => (res.send(console.log(req.params.id))));
router.get('/budget/:id', ctrlUsers.getCosts);
// router.get('/:id/budget/:id', ctrlUsers.getCost);

// router.post('/', (req,res) => (res.send(console.log(req.body))));
router.post('/reg', ctrlUsers.addUser);
//
// router.post('/budget/', (req,res) => res.send(console.log(req.body)));
router.post('/budget/', ctrlUsers.addCost);
//
// router.get('/budget/:id', ctrlUsers.getCost);

// router.get('/budget/:id', ctrlUsers.getCostCat);

// router.get('/:login', ctrlUsers.findOne);

// router.get('/:name', (req, res, next) => {
//     ctrlUsers.findOne({
//         name: req.body.name
//     })
//         .exec()
//         .then((user) => {
//             const budget = user.budgets;
//             res.status(200).json({
//                 Message: 'Your budget',
//                 budget: budget,
//                 query: req.query
//             })
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// });

// router.del('/:id', ctrlUsers.delUser);

module.exports = router;