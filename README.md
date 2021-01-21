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

# REQUIREMENTS
This should be considered a microservice as a member of a greater application (not Docker for starters).

NAME SKETCH
    Ted - Construction worker.

DEMOGRAPHICS
    Father of five
    23 y.o.
    Lives in Tuscon, AZ
    Works as an associate to Cabinets R' User
    Just received his Covid 19 vaccination because he won Vaccine-lottery
    
BEHAVIORS
    Tasked to answer phone calls and set up appointments for repair/installation 
        technicians to go to a customer's house.
    wakes up at 6am to let the dogs out and help the kids get ready for school.
    gets to work at 8AM, works until ALL calls have been responded to
    could be off at 5pm if caught up, but could work as late as 8pm until job is done
    takes care of kids/house responsibilities
        Lawn Care/house issues (broken drawer/etc...)
    

GOALS/WANTS/NEEDS
    Wants to work his job -but go home to his family.
    wants a better way to capture and set appointments for his technicians
    Wants to provide for his family
    wants to be able to play World of Warcraft after he puts his kids to bed.
    wants to kayak on the weekends
    


1) as Ted, I should be able to create a job-appointment for a technician.
    API ENDPOINT NEEDS TO BE RESTFUL
        includes:
            job id //auto-generated
            technician id
            time of appointment
            date created
            date updated
            notes //array of notes associated to a job

2) As Ted, I need to be able to update a job-appointment for a technician
    API ENDPOINT NEEDS TO BE RESTFUL
        includes:
            technician id
            time of appointment
            date updated
            any NEW notes //append only

3) As Ted, I need to be able to view al the details about an existing an job-appointment
    API ENDPOINT NEEDS TO BE RESTFUL      

4) As Ted, I need to be able to delete an existing job-appointment
    API ENDPOINT NEEDS TO BE RESTFUL
