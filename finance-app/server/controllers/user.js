const database = require('../models/database');

module.exports.getUser = function (req, res) {
database
    .getUserById(req.params.id)
    .then((results) => {
      if (results) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({err: 'User not found'});
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};
//
// module.exports.getCost = function (req, res) {
// database
//     .getCostById(req.body.id)
//     .then((results) => {
//       if (results) {
//         res.json(results);
//       } else {
//         res
//           .status(400)
//           .json({err: 'User not found'});
//       }
//     })
//     .catch((err) => {
//       res
//         .status(400)
//         .json({err: err.message});
//     })
// };
//
module.exports.addUser = function (req, res) {
  database
    .addUser(req.body)
    .then((results) => {
      res
        .status(201)
        .json(results);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};
//
module.exports.addCost = function (req, res) {
  database
    .addCost(req.body)
    .then((results) => {
      res
        .status(201)
        .json(results);
    })
    .catch((err) => {
      res
        .status(400)
        .json({err: err.message});
    })
};
//
module.exports.getUsers = function (req, res) {
    database
        .getUsers()
        .then((results) => {
         res.json(results);
        })
        .catch((err) => {
            res
                .status(400)
                .json({err: err.message});
        })

};

module.exports.getCosts = function (req, res) {
    database
        .getCosts()
        .then((results) => {
         res.json(results);
        })
        .catch((err) => {
            res
                .status(400)
                .json({err: err.message});
        })

};

module.exports.getCost = (req, res, next) => {
    database
        .getCostById(req.body.id)
        .exec()
        .then((cost) => {
            // const budget = cost.budgets;
            res.status(200).json({
                Message: 'Your budget',
                budget: cost,
                query: req.query
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
};

module.exports.getCostCat = (req, res, next) => {
    database
        .getCostById(req.body.id)
        .exec()
        .then((result) => getCostCat(result))
        // .getCostCat(req.body.category)
        .then((cost) => {
            // const budget = cost.budgets;
            res.status(200).json({
                Message: 'Your budget',
                budget: cost,
                query: req.query
            })
        })
        .catch(error => {
            res.status(500).json(error)
        })
};

// module.exports.findOne = function (req, res) {
//     database
//         .getByLogin(req.body.login)
//             // .exec()
//             .then((user) => {
//                 const budget = user.budgets;
//                 res.status(200).json({
//                     Message: 'Your budget',
//                     budget: budget,
//                     query: req.query
//                 })
//             })
//             .catch(error => {
//                 res.status(500).json(error)
//             })
// }

// module.exports.delUser = function (req, res) {
//     database
//         .del(req.params.id)
//         .then((results) => {
//             if (results) {
//                 res.json(results);
//             } else {
//                 res
//                     .status(400)
//                     .json({err: 'User not found'});
//             }
//         })
//         .catch((err) => {
//             res
//                 .status(400)
//                 .json({err: err.message});
//         })
// };



