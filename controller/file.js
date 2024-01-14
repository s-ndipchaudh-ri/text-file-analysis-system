const model = require('../model');
const fs = require('fs');
const path = require('path');
const { findTopKWords } = require('../helpers/logics');


module.exports = {
    uploadFile: async (payload) => {
        try {
            let obj = await model.file.create({
                file_name: payload.file.filename
            });
    
            // Convert the Sequelize object to a plain JSON object
            // This conversion makes it easier to work with the data outside of Sequelize
            obj = obj.toJSON();
    
            // Return the created file object
            return { ...obj };
    
        } catch (error) {
            throw error;
        }
    },
    
    analyzeFile: async (payload) => {
        try {
            // Destructure the required properties from the payload
            const { fileId, wordCount, uniqueWordCount, K } = payload;
            console.log(payload); // Logging the payload for debugging

            // Fetch the file record from the database using its fileId
            let obj = await model.file.findOne({
                where: { id: fileId }
            });

            // Convert the Sequelize object to a plain JSON object
            obj = obj.toJSON();

            // Construct the file path by joining directory paths and the file name
            const filePath = path.join(__dirname, '..', 'filestorage', obj.file_name);

            // Initialize an object to store analysis results
            let taskObj = {
                wordCount: null,
                uniqueWordCount: null,
                k_word: null
            };

            // Read the content of the file synchronously
            let data = fs.readFileSync(filePath, 'utf8');

            // Split the file content into words using whitespace as the delimiter
            const words = data.split(/\s+/);

            // If wordCount analysis is requested
            if (wordCount) {
                // Count the number of words, excluding any empty strings
                taskObj.wordCount = words.filter(word => word.length > 0).length;
            }

            // If uniqueWordCount analysis is requested
            if (uniqueWordCount) {
                // Use a Set to determine the count of unique words
                const uniqueWords = new Set(words);
                taskObj.uniqueWordCount = uniqueWords.size;
            }

            // If K most frequent words analysis is requested
            if (K > 0) {
                // Find the top K words (assuming findTopKWords is a defined function)
                taskObj.countK = findTopKWords(data, K);
            }

            // Create a new task record in the database with the analysis results
            let task = await model.task.create({
                word_count: taskObj.wordCount,
                unique_word_count: taskObj.uniqueWordCount,
                k_word: taskObj.countK
            });

            // Convert the Sequelize task object to a plain JSON object
            task = task.toJSON();

            // Return the task object containing the analysis results
            return { ...task };

        } catch (error) {
            // Throw any errors to be handled by the caller
            throw error;
        }
    },

    getAnalyzeFileData: async (payload) => {
        try {
            // Destructure taskId from the payload
            const { taskId } = payload;
    
            // Fetch the task data from the database using the provided taskId
            let data = await model.task.findOne({ where: { id: taskId } });
    
            // If no data is found
           if (!data) { throw new Error('Task not found'); }
    
            // Convert the Sequelize object to a plain JSON object
            data = data.toJSON();
    
            // Return the task data
            return { ...data };
    
        } catch (error) {
            // Throw any encountered errors to be handled by the caller
            throw error;
        }
    },

}