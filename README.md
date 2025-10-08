# 📽️ API REST PROJECT - Platforms & Characters

## _This project is a REST API built with Node.js, Express and MongoDB._ 
### It allows managing streaming platforms and their characters.

## 🤖 TECHNOLOGIES USED
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [MongoDB Atlas] - NoSQL database with json
- [Mongoose] - node.js library
- [CORS] - allows the request from different origins

## 📒 STRUCTURE
  > node_modules
  > proyecto6frontend
  > public
  > src
  - api
  - config
  - data
  >utils
   - seeds
  >.env
  index.js
  package-lock.json
  package.json
  
## 🔋 INSTALATION
1. Clone the repository
 ```sh
git clone https://github.com/Martaarl/proyecto-API-REST.git
cd proyecto-API-REST
```
2. Install dependencies
```sh
npm install
```
3. Set up environment variables
```sh
DB_URL=your_mongodb_connection_string
PORT=3000
```
4. Run the server
```sh
node index.js
```
5. Optional: seed the database
```sh
node utils/seeds/movies.seed.js
```
This API should now be running at: 
```sh
http://localhost:3000
```
## 🔗 ENDPOINTS
#### CHARACTERS
```GET ```| */api/characters* - get all characters
```GET``` */api/characters/:id* - get a characters by ID
```POST``` */api/characters* - create a new character
```PUT``` */api/character/:id* - update and existing character
```DELETE``` */api/characters/:id* - delete a character

#### PLATFORMS
``` GET ```*/api/platforms* - get all platforms
```GET``` */api/platforms/:id* - get a platforms by ID
```POST``` */api/platforms* - create a new platform
```PUT``` */api/platforms/:id* - update and existing platform
```DELETE``` */api/platforms/:id* - delete a platform

### 🌱 SEED
The project includes a seed script to populate the data base with initial characters.
run: node/utils/seeds/movies.seed.js

### ✅ 
Full crud for characters and platforms
Relationship between collections
When updating platforms, existing characters are not removed
Prevents duplicate entries in related arrays
Includes a seed script to easily populate database
