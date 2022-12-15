module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      user_id: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {}
  );
  Order.associate = function (models) {
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "order_user",
        onDelete: "CASCADE",
      });
  };
  return Order;
};
