# Full Stack

## Goal
Deploy a containerized MERN app with an automated build and testing process.

#### Tools
- Backend
  - Express
  - MongoDB
- Front End
  - React
- Testing
  - React Testing Library
  - Jest
  - Postman
  - Compass
- Version Control
  - Git
- Docker
- Digital Ocean

---

## Plan

#### Setup
- Create a git repo
- Dockerfile will be generated once app is MVP
- Add test/dev/start scripts
- create user models
- login and signup routes
- password hashing
- setup tests (login, signup)
- run tests


#### Notes

- Having trouble connecting to the database consistently
  - I required the app before db... facepalm
- Passwords don't hash on insertMany
- The problem wasnt the db connection, and it wasnt the way i was exporting async functions. ITS BECAUSE OF CIRCULAR DEPENDENCIES!!! ARRRRG. I'm trying to import the user model into my library functions, but then im trying to import my library functions into my user model so i can use them for hooks/methods.
- Tests are running, but now I need to seed the db properly; hash
- importing User model on beforeEach seemed to work

#### Test Log
- split tests into _config and the rest
- new user
- existing user

