module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define("School", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        rating: {
            type: DataTypes.DECIMAL(4, 2),
            validate: {
                isInt: true,
                allowNull: false
            }
        }
    });

    School.associate = models => {
        School.hasMany(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return School;
};