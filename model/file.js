
module.exports = function (Sequelize, sequelize, DataTypes){
    return sequelize.define("file",{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        file_name : {
            type : DataTypes.TEXT,
        },
        createdAt : {
            type: DataTypes.DATE,
			defaultValue: DataTypes.NOW(0)
        },
        updatedAt :{
            type: DataTypes.DATE,
			defaultValue: DataTypes.NOW(0)
        }
    },{
        tableName : "file",
       
    })
}