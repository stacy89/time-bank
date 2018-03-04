var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notNull: false
      // },
      required: true
    },
    // weight_task_1: {
    //   type: DataTypes.DECIMAL(3,2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    // weight_task_2: {
    //   type: DataTypes.DECIMAL(3, 2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    // weight_task_3: {
    //   type: DataTypes.DECIMAL(3, 2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    // weight_task_4: {
    //   type: DataTypes.DECIMAL(3, 2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    // weight_task_5: {
    //   type: DataTypes.DECIMAL(3, 2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    // weight_task_6: {
    //   type: DataTypes.DECIMAL(3, 2),
    //   validate: {
    //     notNull: false
    //   }
    // },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notNull: false
      // },
      required: true
    }  
  });

  return Parent;
  
  Parent.method.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  Parent.method.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
}








