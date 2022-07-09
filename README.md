# finnancial_elements_lister_sf
## Repository content
1. Finnancial elements lister backend
2. Finnancial elements lister frontend
## Requirements
1. Node js
2. Mongodb
> Will be installed through the installation steps, however this needs docker to be installed
## Installation steps
1. Install mongodb
    1. open a terminal and navigate to ./
    2. run "docker-compose up -d" command
        - note that this will create a mongodb instance on 27019 port

> You can skip the installation of mongoDB if you already have one running, however make sure to modify mongo related envs in ./backend/dev.env as per your instance

2. Install backend
    1. open a terminal and navigate to ./backend
    2. run "npm install" command
    3. populate mongodb by typing "npm run populateMongo" into terminal
    3. once the population completed you can run the server by typing "npm run devStart" into terminal and this will start the server on the 5000 PORT (can be changed in dev.env)

> Note that when i firstly tried to install on a fresh pc i ran into problems when i started the server. I was able to resolve it by upgrading node to 14.18.0

3. Install frontend
    1. open a terminal and navigate to ./frontend
    2. run "npm install" command
    3. once the installation completed you can run the server by typing "npm start" into terminal and this will start the server on the 3002 PORT (can be changed in .env)

## @TODOS (in priority order)

### Frontend
1. Write tests
2. Make web app full responsive
3. Write missing jsdocs (already written some)
4. Skeleton loading screens
5. Create new i18n namespaces
6. Translate all missing i18n keys
7. Global network error handling
8. new route for diagram and summed values
9. new route for read single element (it can be in modal)
10. new route for update single element (it can be in modal)
11. implement delete element
12. add missing search params to element list route
13. implement sort, item per page on element list route

### Backend
1. create new route for diagrams
2. read single element route
3. update single element route
4. delete single element route
5. add missing search params for /elements get route (maybe i could implement a logic which grabs all url params and tries to query with it)
6. sort, item per page on /elements get route

### DevOps
1. to able to docker-compose up -d the whole app
    1. create docker files for images and build them
    2. insert images in docker-compose up yml

### Others
1. create readme.md files to ./frontend, ./backend

