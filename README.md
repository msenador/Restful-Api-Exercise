# Restful-Api-Exercise
Using Postgresql and knex to communicate with restful API's(GET,DELETE,PUT,POST)

# Create a react app
Create react app using "npx create-react-app <Enter name>"

# Install knex dependencies (run these in the terminal)
1.) npm init -y
2.) npm i express pg knex
3.) npx knex init

# Creating "appointments" database using Postgresql.
1.) Install Postgresql
2.) Create db called "appointments"
3.) Create schema and migrate and run seeds.
4.) cd into backend and run "node api.js" in terminal to run server.

# Commands to create migrate/run seeds.
- npx knex migrate:make <Enter name>
- npx knex migrate:latest
- npx knex seed:make <Enter name>
- npx knex seed:run

# POSTMAN can be used to test API's.
