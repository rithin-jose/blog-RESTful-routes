


# Blog depicting RESTful routes

## What is REST?

REST (i.e. Representation State Transfer) is an architectural style  for defining our routes. It is a way of mapping HTTP routes and the CRUD functionalities.

## What are routes?

Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

## What is CRUD?

When building APIs, we want to provide the four basic types of functionality. There must be a way to Create, Read, Update, and Delete resources.

In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.

## The 7 RESTful routes
|Route name|URL              |HTTP verb|Description  |
|--       |--                |--       |--|
| INDEX   | /blogs           | GET     | Display alist of all blogs |
| NEW     | /blogs/new       | GET     | Show form to make new blogs |
| CREATE  | /blogs           | POST    | Add new blog to db, then redirect |
| SHOW    | /blogs/:id       | GET     | Show info about one blog  |
| EDIT    | /blogs/:id/edit  | GET     | Show edit form of one blog |
| UPDATE  | /blogs/:id       | PUT     | Update a particular blog, then redirect   |
|DESTROY  | /blogs/:id       | DELETE  | Delete a particular blog, then redirect |

**MEN** (**M**ongo **E**xpress **N**ode) stack backend project for testing purposes.

Prerequisite : You must have mongodb installed on your system.If not you can install it form [here](https://www.mongodb.com/)


To View clone the repo and run the command:

      npm install

followed by

      node app.js
  To use the database mongodb must be installed for [here](https://www.mongodb.com/download-center).
  and to route the data to the database make directory  data and db

	C:\data\db
	
on windows depending on which drive the project is (if its on d drive make D:\data\db ).
page will be available at ```localhost:3000``` or ```127.0.0.1:3000```

To automate the server to handle changes use [nodemon](https://www.npmjs.com/package/nodemon)

