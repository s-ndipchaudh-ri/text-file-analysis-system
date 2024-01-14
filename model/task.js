
module.exports = function (Sequelize, sequelize, DataTypes){
    return sequelize.define("task",{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        word_count : {
            type : DataTypes.INTEGER,
            defaultValue : null
        },
        unique_word_count : {
            type : DataTypes.INTEGER,
            defaultValue : null
        },
        k_word : {
            type : DataTypes.JSON,
            defaultValue : null
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
        tableName : "task",
       
    })
}