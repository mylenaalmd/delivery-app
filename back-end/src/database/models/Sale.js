const saleModel = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      satus: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'sales',
      underscored: true,
    });
  
    Sale.associate = (models) => {
      Sale.belongsTo(models.User,
        [{ foreignKey: 'userId', as: 'users' },
      { foreignKey: 'sellerId', as: 'sellers' }]);
    };
  
    return Sale;
  };
  
  module.exports = saleModel;