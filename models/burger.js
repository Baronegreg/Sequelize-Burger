// var orm = require("../config/orm");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };
//Post.js
//======================================================================================
module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers",{
    burger_name: {
      type: DataTypes.STRING,
      validate: { 
        len: [1,50] }
    },
    devoured: DataTypes.BOOLEAN
  },

    {
    
          // We're saying that we want our Customer to have Burgers
        classMethods: {
          associate: function(models) {
                // A Customer (foreignKey) is required or a Burger can't be made
                Burgers.belongsTo(models.Customer, {
                  foreignKey: {
                    allowNull: false
                  }
                })
          }
        }
      }
    );
  return Burgers;
};
//=========================================================================================
// var connection = require("../config/connection");
//     //Find all Burgers
//     connection.sync().then(function() {
//         Burgers.findAll().then(function(burgers) {
//             console.log(burgers.length);
//         });
//     });
    //========================================================================================
    //Create Jalapeno Cheddar
    // connection.sync().then(function() {
    //     Burgers.create({
    //         burger_name: 'Jalapeno Cheddar',
    //         devoured: false
    //     });
    // });

    //Create Quarter Pounder with Cheese
    // connection.sync().then(function() {
    //     Burgers.create({
    //         burger_name: 'Quarter Pounder with Cheese',
    //         devoured: false
    //     });
    // });

    //Create Whopper Jr
    // connection.sync().then(function() {
    //     Burgers.create({
    //         burger_name: 'Whopper Jr',
    //         devoured: false
    //     });

    // });
//==================================================================
    // var db = require("./models");

  //   db.Burgers.create({
  //     burger_name: 'Jalapeno Cheddar',
  //     devoured: false
  // }).then(function(dbuser){
  //   console.log(dbuser);
  // });

  // db.Burgers.create({
  //     burger_name: 'Quarter Pounder with Cheese',
  //     devoured: false
  // }).then(function(dbuser){
  //   console.log(dbuser);
  // });

  // db.Burgers.create({
  //     burger_name: 'Whopper Jr',
  //     devoured: false
  // }).then(function(dbuser){
  //   console.log(dbuser);
  // });

// module.exports = function(sequelize, DataTypes) {
//         var Burgers = sequelize.define("burgers", {
//             burger_name: {
//                 type: Sequelize.STRING,
//                 allowNull: false
//             },
//             devoured: {
//                 type: Sequelize.BOOLEAN
//             }
//         }, {
//             timestamps: false
//         });
//     },
//     return Burgers;
// };

// module.exports = burgers;
