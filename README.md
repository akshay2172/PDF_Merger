# PDF Merger

This project is a simple web application that allows users to upload and merge multiple PDF files into a single PDF. The application is built using Node.js, Express.js, and the `pdf-merger-js` library, with a user-friendly frontend powered by HTML and Bootstrap.

---

## Features
- Upload multiple PDF files.
- Dynamically merge PDFs into a single file.
- Download the merged PDF directly from the browser.
- Responsive UI using Bootstrap.

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Installation

1. ## Clone the repository:

   * git clone https://github.com/your-username/pdf-merger.git
   * cd pdf-merger

2. ## Install dependencies:
   * npm install
  
3. ## Folder structure:
   .
├── public/
├── templates/
│   └── PDF.html
├── uploads/
├── merge.js
├── server1.js
├── README.md
├── package.json
└── package-lock.json

4. ## Create required directories: Ensure the following directories exist

  * uploads/ (for temporary file storage)
  * public/ (for storing the merged PDF)

---

# Usage

1. ## Start the server:
  * node server1.js

2. ## Access the application: Open your browser and go to:

* http://localhost:3000
  
3. ## Merge PDFs: 

* Select multiple PDF files (no file limit).
* Click the Submit button.
* The merged PDF will be available for download at: 
  http://localhost:3000/static/merged.pdf


# Code Overview:

merge.js
Handles the PDF merging logic using the pdf-merger-js library. The function dynamically adds PDFs and saves the merged file to the public/ directory.

## server1.js
Express.js server: Manages routes and file uploads using multer.
## Routes:
- Serves the HTML form.
- **/merge**: Processes uploaded PDFs and merges them.
- **Static files**: Hosts the merged PDF for download in the public/ directory.
## PDF.html
- A simple, responsive HTML form built with Bootstrap to allow users to upload files and trigger the merge proces
  
# Dependencies
- **Express**: Web framework for Node.js.
- **Multer**: Middleware for handling multipart/form-data, used for file uploads.
- **PDF Merger** JS: Library for merging PDF files.
- **Bootstrap**: Frontend framework for styling.

---
  
**Uploaded files remain in the uploads/ directory after merging**.