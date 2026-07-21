# Node JS basic

This directory contains introductory projects and exercises using **Node.js**, covering basic module creation, execution, and utilities.

## Requirements
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All files interpreted/executed on Ubuntu 20.04 LTS using **Node.js** (version 14.x.x)
* All files should end with a new line
* The first line of all your files should be exactly `#!/usr/bin/node`
* Code should use the `.js` extension

## Tasks

### 0. Executing basic JavaScript with Node JS
* **File:** `0-console.js`
* **Description:** Creates a function named `displayMessage` that prints the string argument passed to it into STDOUT using `console.log`. Exported using CommonJS module syntax (`module.exports`).

### 1. Using Process stdin
* **File:** `1-stdin.js`
* **Description:** A program executed through the command line that prompts the user for their name, reads input from `process.stdin`, outputs the name, and handles the close event properly.

### 2. Reading a file synchronously with Node JS
* **File:** `2-read_file.js`
* **Description:** Defines a function `countStudents` that reads a CSV database file synchronously, handles errors gracefully if the file is missing, counts total students, and aggregates students by field along with their first names.

### 3. Reading a file asynchronously with Node JS
* **File:** `3-read_file_async.js`
* **Description:** Defines a function `countStudents` that returns a Promise and reads a CSV database file asynchronously, parsing and logging student statistics upon successful completion or rejecting with an error if the file cannot be loaded.

### 4. Create a small HTTP server using Node's HTTP module
* **File:** `4-http.js`
* **Description:** Creates a basic HTTP server listening on port 1245 using Node's `http` module, exporting the `app` variable and returning "Hello Holberton School!" as plain text for any endpoint.

### 5. Create a more complex HTTP server using Node's HTTP module
* **File:** `5-http.js`
* **Description:** Creates an HTTP server with custom routing handling `/` and `/students` endpoints, reading a student database file passed via command-line arguments asynchronously and returning formatted student counts and listings.

### 6. Create a small HTTP server using Express
* **File:** `6-http_express.js`
* **Description:** Creates a lightweight HTTP server using the **Express** framework, listening on port 1245 and responding with "Hello Holberton School!" specifically at the root endpoint `/`.

### 7. Create a more complex HTTP server using Express
* **File:** `7-http_express.js`
* **Description:** Recreates the complex routing HTTP server using the **Express** framework, accepting a database path as a command-line argument, serving `/` and `/students` endpoints, and processing student file data asynchronously.

### 8. Organize a complex HTTP server using Express
* **Files:** 
  * `full_server/utils.js`
  * `full_server/controllers/AppController.js`
  * `full_server/controllers/StudentsController.js`
  * `full_server/routes/index.js`
  * `full_server/server.js`
* **Description:** Restructures the complex Express HTTP server into a modular architecture containing controllers, routing definitions, utility functions, and ES6/Babel integration via `babel-node`.
