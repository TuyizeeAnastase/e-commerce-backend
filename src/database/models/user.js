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
      foreignKey: "roleId",
      as: "role",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Cart, {
      foreignKey: "user_id",
      as: "user",
      onDelete: "CASCADE",
    });
    User.hasOne(models.CartItem, {
      foreignKey: "user_id",
      as: "users",
      onDelete: "CASCADE",
    });
    User.hasMany(models.Order, {
      foreignKey: "user_id",
      as: "order_user",
      onDelete: "CASCADE",
    });
    User.hasOne(models.OrderItem, {
      foreignKey: "user_id",
      as: "order_user_item",
      onDelete: "CASCADE",
    });
    User.hasOne(models.Booking, {
      foreignKey: "user_id",
      as: "booked_user",
      onDelete: "CASCADE",
    });
  };
  return User;
};
