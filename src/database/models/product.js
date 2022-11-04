module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      color: DataTypes.STRING,
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      images: DataTypes.STRING,
      description: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {}
  );
  Product.associate = function (models) {
    Product.belongsTo(models.Shop, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE",
    }),
      Product.hasMany(models.Order, {
        foreignKey: "product_id",
        as: "order_products",
        onDelete: "CASCADE",
      }),
      Product.hasMany(models.CartItem, {
        foreignKey: "product_id",
        as: "products",
        onDelete: "CASCADE",
      });
  };
  return Product;
};
