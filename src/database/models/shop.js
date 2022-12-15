module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    "Shop",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      summary: DataTypes.STRING,
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {}
  );
  Shop.associate = function (models) {
    Shop.hasMany(models.Product, {
      foreignKey: "category_id",
      as: "category",
      onDelete: "CASCADE",
    });
    Shop.hasOne(models.Booking, {
      foreignKey: "category_id",
      as: "booking_category",
      onDelete: "CASCADE",
    });
  };
  return Shop;
};
