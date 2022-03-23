// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { hasMany } = require('./Product');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: '',
  foreignKey: ''
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: '',
  foreignKey: ''
})

Tag.hasMany(Product, {
  foreignKey: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
