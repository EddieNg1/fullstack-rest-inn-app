# Rest-Inn API

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