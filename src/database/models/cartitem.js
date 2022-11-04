module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    "CartItem",
    {
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      cart_id: DataTypes.ARRAY(DataTypes.INTEGER),
      user_id: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {}
  );
  CartItem.associate = function (models) {
    CartItem.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cartItems",
      onDelete: "CASCADE",
    });
    CartItem.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "products",
      onDelete: "CASCADE",
    });
    CartItem.belongsTo(models.Product, {
      foreignKey: "user_id",
      as: "users",
      onDelete: "CASCADE",
    });
  };
  return CartItem;
};
