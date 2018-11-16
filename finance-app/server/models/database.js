const Users = require('./user');
const Costs = require('./costs');
// const url = 'mongodb://qwert:12345qwert@ds031608.mlab.com:31608/test_base';

module.exports.getUserById = (paramsId) => Users.findById({"_id": paramsId});
// // module.exports.getByLogin = (bodyLogin) => Users.findByLogin({"_login": bodyLogin});
// // module.exports.getCostById = (bodyId) => Users.findById({"id": bodyId});
//
module.exports.addUser = function (data) {
    let User = new Users({
        // login: data.login,
        email: data.email,
        password: data.password,
        profilePicture: data.profilePicture
    });

    return User.save();
};
//
module.exports.addCost = function (data) {
    let Cost = new Costs({
        id: data.id,
        name: data.name,
        price: data.price,
        category: data.category,
        date: data.date
    });

    return Cost.save();
  };

module.exports.getUsers = () => Users.find();
module.exports.getCosts = () => Costs.find();
module.exports.getCostById = (bodyId) => Costs.find({"id": bodyId});
module.exports.getCostCat = (cat) => Costs.find({"category": cat});
// module.exports.getCostByIdCat = (bodyId, cat) => Costs.find({"id": bodyId, "category": cat});
