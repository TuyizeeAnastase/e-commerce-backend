module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      phone_number: DataTypes.STRING,
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {}
  );
  User.associate = function (models) {
    User.belongsTo(models.Role, {
      foreignKey:"roleId",
      as: "role",
      onDelete: "CASCADE",
    });
  };
  return User;
};
