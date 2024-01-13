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

