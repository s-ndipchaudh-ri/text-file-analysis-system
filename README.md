Node.js Text Analysis Backend
Objective : 
Introducing a dynamic Node.js backend system designed for text file analysis. This robust solution offers APIs for file upload, analysis task initiation, and result retrieval. Key features include text file uploading with unique file IDs, a variety of text analysis operations (word count, unique word count, top K words), and an efficient method to fetch analysis results using task IDs. Built with JavaScript, Express, PostgreSQL, and Sequelize, it's perfect for applications needing advanced text processing capabilities.

Features
1. File Upload
API Endpoint: Users can upload text files.
File ID: Generates a unique fileId for each file after upload.
Metadata Storage: Stores file metadata (filename, upload date) in the database.

2. Initiate Analysis Task
API Endpoint: Start text analysis on files using fileId.
Supported Operations:
countWords: Total word count.
countUniqueWords: Unique word count.
findTopKWords: Most frequent words (parameter k is user-defined).
Task Tracking: Returns a unique taskId for each initiated analysis task.

3. Retrieve Analysis Results
API Endpoint: Fetch results using taskId.
Result Details: Provides results of the specified analysis operation.

Getting Started

Prerequisites:

Before you begin, ensure you have Node.js and Postgres installed on your machine. 

A. Give configuration of your database in dbconfig file.

B. Installation:

    1. Install Dependencies: Open your terminal and navigate to the root directory of the project. Run the following command to install all necessary dependencies:
    ----> npm install

    2. Start the Application: Once the installation is complete, start the application by running:
    ----> npm start

    This command will start the server on the designated port 8001, and you should see a message indicating that the server is running.


Testing the API
To test the API endpoints:

Import Postman Collection: Download and install Postman. Import the provided Postman collection into your Postman application. This collection contains pre-configured requests for the API endpoints.

Using the API: With the server running, you can use the requests in the Postman collection to test the three API endpoints. Ensure the server URL and port in Postman match the ones where your server is running.

API Endpoint 1: Upload File
Purpose: Upload a text file for analysis.
Method: POST
Endpoint: /file/upload
Data Format: multipart/form-data
Parameter: file - Select and upload the text file.

API Endpoint 2: Create Task
Purpose: Request analysis of the uploaded file.
Method: POST
Endpoint: /file/analyz
Request Body: JSON format
Example
{
    "fileId": 2,
    "wordCount": true,
    "uniqueWordCount": true,
    "K": 3
}
Parameters:
fileId: ID of the uploaded file.
wordCount: Boolean flag to include word count in analysis.
uniqueWordCount: Boolean flag to include unique word count.
K: An integer parameter (purpose unspecified).

API Endpoint 3: Fetch Task
Purpose: Retrieve results of the analysis.
Method: GET
Endpoint: /file/analyz
Parameter: taskId - ID of the analysis task to fetch results for.
