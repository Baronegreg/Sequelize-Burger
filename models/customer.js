module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Burger model a name of type STRING
    name: DataTypes.STRING
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Burger to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Burger with Posts
          // When an Burger is deleted, also delete any associated Posts
          Burger.hasMany(models.Burgers, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Burger;
};