📽️ API REST PROJECT - Platforms & Characters
This project is a REST API built with Node.js, Express and MongoDB. It allows managing
streaming platforms and their characters.

🤖 TECHNOLOGIES USED
  Node.js
  Express
  MongoDB Atlas
  Mongoose
  CORS

📒 STRUCTURE
  > node_modules
  > proyecto6frontend
  > public
  > src
    >api
    >config
    >data
  >utils
    >seeds
  .env
  index.js
  package-lock.json
  package.json

🔗 ENDPOINTS

CHARACTERS
GET /api/characters - get all characters
GET /api/characters/:id - get a characters by ID
POST /api/characters - create a new character
PUT /api/character/:id - update and existing character
DELETE /api/characters/:id - delete a character

PLATFORMS
GET /api/platforms - get all platforms
GET /api/platforms/:id - get a platforms by ID
POST /api/platforms - create a new platform
PUT /api/platforms/:id - update and existing platform
DELETE /api/platforms/:id - delete a platform

🌱 SEED
The project includes a seed script to populate the data base with initial characters.
run: node/utils/seeds/movies.seed.js

✅ 
Full crud for characters and platforms
Relationship between collections
When updating platforms, existing characters are not removed
Prevents duplicate entries in related arrays
Includes a seed script to easily populate database
