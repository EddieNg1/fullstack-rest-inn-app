# Rest-Inn API Full Stack Application

## Summary
This app is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) Stack.

## Back-End

A simple Restful API that allows a user to
* create and read customers
* create, read, edit, and delete properties

## End Points

### Customers

**GET /customers**

The above end point returns all customers in the database.

The above end point also allows you to filter customers by passing any of the below query string parameters:

| Parameter   | Description |
| ----------- | ----------- |
| firstName   | customer first name   |
| lastName    | customer last name    |
| email       | customer email        |

**POST /customers**

The above end point creates a customer. You must submit the customer data in the body of the request (as JSON). The data includes:
* firstName (required), 
* lastName (required), 
* email (required), 
* password (required)
* phoneNumbers (array)

**GET /customers/id**

The above end point returns a customer based on the id provided.

### Properties

**GET /properties**

The above end point returns all properties in the database.

The above end point also allows you to filter properties by passing any of the below query string parameters:

| Parameter   | Description |
| ----------- | ----------- |
| type   | property type (condo, apartment, etc.)   |
| location    | location preference  |
| bestSeller       | 'true' to query best sellers, 'false' otherwise   |

**GET /properties/id**

The above end point returns a property based on the id provided.

**GET /properties/types**

The above end point returns the types of all properties in the database.

**POST /properties**

The above end point creates a property. You must submit the property data in the body of the request (as JSON). The data includes:
* title (Required), 
* rentalPrice (Required), 
* description, 
* type (Required),
* houseRules (array) 
* amenities (array) (Required),
* location (Required),
* bestSeller (boolean) (Required)
* photoURL

**PUT /properties/id**

The above end point updates a property based on the id provided. The client application is required to submit the property data in the body of the request (as JSON), that is required to be updated. The data includes: 
* title, 
* rentalPrice, 
* description, 
* type,
* houseRules, 
* amenities,
* location,
* bestSeller (boolean),
* photoURL

**DELETE /properties/id**
The above end point deletes a property based on the id provided.

### Rules to Set up Back-End (Locally)
1. Clone source code by running: git clone GITHUP_PROJECT_URL . Add clone project to a blank workspace area in your code editor
2. After Cloning, re-install ALL 3rd party dependencies by running npm install
3. Create a folder within the project called config This config folder must be on the root.
4. Within the config folder, create a file called keys.env
5. Within the keys.env file, create the below environment variables :
* MONGO_DB_CONNECTION - Assign your MongoDB Database Connection String to the variable.
    * PORT - Assign your PORT number. Ensure that it is not the same as the PORT Number that your Front-End Application is listening to. You can set 5000
6. Run application (locally) by running : npm run dev

## Front-End
The Front-End was completely decoupled from the Back-End. It was built as a SPA (Single Page Application) using React

### Rules to Set up Front-End (Locally)
1. Clone this repo by running your git clone project URL . Add clone project to a blank workspace area in your code editor
2. Reinstall all your dependencies by running the following command npm i
3. Start React project (locally) by running npm start Ensure that your Back-End is up and running before you start up your Front-End