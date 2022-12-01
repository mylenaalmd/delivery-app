const saleProductModel = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true }
    },
    {
      timestamps: false,
      tableName: 'salesProducts',
      underscored: true,
    });
    SaleProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale,
        { foreignKey: 'saleId', as: 'sales',
    through: 'SaleProduct', otherKey: 'productId' });
        models.Sale.belongsToMany(models.Product,
            {foreignKey: 'productId', as: 'products',
        through: 'SaleProduct', otherKey: 'saleId'})
    };
  
    return SaleProduct;
  };
  
  module.exports = saleProductModel;