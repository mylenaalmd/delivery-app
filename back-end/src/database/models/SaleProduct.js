const saleProductModel = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
      saleId: { type: DataTypes.INTEGER, foreignKey: true },
      productId: { type: DataTypes.INTEGER, foreignKey: true },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'salesProducts',
      underscored: true,
    });
    SaleProduct.associate = (models) => {
      models.Product.belongsToMany(models.Sale,
        { foreignKey: 'saleId', as: 'sale',
    through: 'SaleProduct', otherKey: 'productId' });
        models.Sale.belongsToMany(models.Product,
            {foreignKey: 'productId', as: 'product',
        through: 'SaleProduct', otherKey: 'saleId'})
    };
  
    return SaleProduct;
  };
  
  module.exports = saleProductModel;