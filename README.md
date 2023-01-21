# milestone3-backend

# Project STYLE_CENTRAL

Main function of this backend is to keep track of user data name email and hashed password. 
As well as keep track of user likes and user cart to make that data persistant. 

## Tech Usage

**Stack:** Postgres, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**:dotenv, bcrypt, cors, json-web-token, nodemon, sequelize

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
users/
| GET | `/users` | Index page listing all users |
| POST | `/users` | Create a new user with hashedpw |
items |
| GET | `/items/:id` | return users likes and cart status for all entries where id === user_id |
| POST | `/items/:likeOrCart` | versitile route that will update the likes or cart depending on whether rout is :cart or :like |
| POST | `/deleter/:id` | a helper route that sets user cart to empty before we update the new cart items |
authentication|
|GET|`/authentication/profile`|decodes jwt token and authenticates current user|
|POST|`/authentication/`|if user id and password are in db provides a jwt key to be stored on local host for quick authentication and session persistance|

to make this repository work on your machine be sure to run 
* create .env file
* npm init -y 
* npm install express
* npm install dotenv
* npm i sequelize
* npm i pg pg-hstore

## Notes
Possible future ideas:
* Add user Rateings
* add functional checkout page and a way to track user orders