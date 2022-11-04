module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      product_id: DataTypes.ARRAY(DataTypes.INTEGER),
      user_id: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {}
  );
  Order.associate = function (models) {
    Order.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "order_products",
      onDelete: "CASCADE",
    }),
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "order_user",
        onDelete: "CASCADE",
      });
  };
  return Order;
};
