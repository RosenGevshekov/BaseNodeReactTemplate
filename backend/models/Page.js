module.exports = (sequelize, DataTypes) => {
    const Page = sequelize.define('Page', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Page;
};