module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "Service",
    {
      name: DataTypes.STRING,
      profile: DataTypes.STRING,
    },
    {}
  );
  Service.associate=function(models){
    Service.hasMany(models.Booking,{
      foreignKey:"category_id",
      as:"booking_category",
      onDelete:"CASCADE"
    })
  }
  return Service;
};
