module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "OrderItem",
    {
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      order_id: DataTypes.ARRAY(DataTypes.INTEGER),
      user_id: DataTypes.ARRAY(DataTypes.INTEGER),
      total: DataTypes.INTEGER,
    },
    {}
  );
  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.Order, {
      foreignKey: "order_id",
      as: "orderItems",
      onDelete: "CASCADE",
    });
    OrderItem.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "orderProducts",
      onDelete: "CASCADE",
    });
    OrderItem.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "order_user_item",
      onDelete: "CASCADE",
    });
  };
  return OrderItem;
};
