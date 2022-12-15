module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      user_id: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      issue: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      is_fixed:DataTypes.STRING
    },
    {}
  );
  Booking.associate = function (models) {
    Booking.belongsTo(models.Service, {
      foreignKey: "category_id",
      as: "booking_category",
      onDelete: "CASCADE",
    });
    Booking.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "booked_user",
      onDelete: "CASCADE",
    });
  };
  return Booking;
};
