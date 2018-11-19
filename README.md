# Phyz.io

## Goal
Deploy a containerized MERN app with an automated build and testing process.

#### Tools
- Backend
  - Express
  - MongoDB
- Front End
  - React
  - Material-UI
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
- Create a git repo
- Dockerfile will be generated once app is MVP
- Add test/dev/start scripts
- Server/DB
- Front End
- Test
- Deploy

## DB Branch Notes

#### Goal
- Complete integration/unit test for express

#### Log
- Serve db from default connection
- Integration tests require making requests to app.js and verifying results
- Write out map: routes, models
- Unbelievably frustrated. Tests work inconsistently. I've separated everything out as much as possible but I think I need to go back to setting up a test environment using the default connection.
- OMFG I didn't set up the SECRET environment variable in my tests. Make sure you provide ALL the env variables form the beginning. Holy crap that was seriously 5 days of debugging. So stupid.
- Holy crap I actually got all the auth unit/integration tests to pass. That took more work than just coding the damn thing. I hate testing.
