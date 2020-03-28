module.exports = (sequelize, DataTypes) => {
    return sequelize.define('hotel', {
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    5,
                    50,
                ],
            },
        },
        price_per_night: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    1,
                    10,
                ],
            },
        },
        type: {
            type: DataTypes.ENUM,
            values: [
                'apartament',
                'botel',
                'hostel',
                'love hotel',
                'eco hotel',
                'motel',
            ],
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
            },
            defaultValue: 'apartament',
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [
                    3,
                    25,
                ],
            },
        },
    });
};