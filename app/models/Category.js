const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model {}
/***
 * Voici les champs nécessaires pour le Model
 * name string null false unique true
 * tableName: 'categories',
 */
 Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: 'categories',
    }
);


module.exports = Category;
