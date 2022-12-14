module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      user_id: DataTypes.INTEGER,
      total:DataTypes.INTEGER
    },
    {}
  );
  Cart.associate = function (models) {
      Cart.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
        onDelete: "CASCADE",
      }),
      Cart.hasMany(models.CartItem,{
        foreignKey:"cart_id",
        as:"cartItems",
        onDelete:"CASCADE"
      })
  };
  return Cart;
};
