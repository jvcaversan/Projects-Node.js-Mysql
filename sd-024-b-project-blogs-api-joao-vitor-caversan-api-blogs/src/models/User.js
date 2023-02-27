const user = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        id: { 
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password:  DataTypes.STRING,
        image:  DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'users'
    }
    
    );
    return UserTable;
}

module.exports = user;