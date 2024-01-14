const fs = require('fs');
const path = require('path');
const model = require('../model');


module.exports = {
    uploadFile: async (payload) => {
        try {

            let obj = await model.file.create(
                {
                    file_name: payload.file.filename
                }
                )
            obj = obj.toJSON()
            return {
              ...obj
            }
            
        } catch (error) {
            throw error

        }
    }
}