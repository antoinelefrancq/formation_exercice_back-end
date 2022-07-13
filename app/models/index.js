const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Role = require('./Role');

// Associer les catégories aux produits (as products)
// un produit a une catégorie
Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "products"
});
// Associer les produits aux catégories (as category)
// réciproque : une catégorie concerne plusieurs produits
Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "category"
});

Role.hasMany(User, {
    foreignKey: 'role_id',
    as: 'users',
});

User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'role',
});

module.exports = { User, Category, Product, Role };
