module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      title: DataTypes.STRING,
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {}
  );
  Role.associate = function (models) {
    Role.hasMany(models.User, {
      foreignKey:"roleId",
      as: "role",
      onDelete: "CASCADE",
    });
  };
  return Role;
};
