[📽️ API REST PROJECT - Platforms & Characters.md](https://github.com/user-attachments/files/23289462/API.REST.PROJECT.-.Platforms.Characters.md)
# 🎬 API REST - Characters & Platforms
Este proyecto es una **API REST** desarrollada con **Node.js**, **Express** y **MongoDB**.  
Permite gestionar dos colecciones principales: **Characters** y **Platforms**, aplicando operaciones CRUD completas y estableciendo relaciones entre ellas.
---

## 🧱 Tecnologías utilizadas

- **Node.js**  
- **Express.js**  
- **MongoDB Atlas**  
- **Mongoose ODM**  
- **Dotenv** para la configuración del entorno  
- **Nodemon** (para entorno de desarrollo)
- **Cors** (acepta peticiones de distinto origen)

---

## ⚙️ Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd nombre-del-proyecto
   ```
2. **Instala las dependencias:** 
     ```bash
    npm install
    ```
3. **Crea un archivo .env en la raíz del proyecto con el siguiente contenido:**
    ```bash
    PORT=3000
    DB_URL=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombreBaseDatos>
    ```
4. **Ejecuta el servidor:**
    ```bash
    npm run dev/node index.js
    ```
5. **Una vez iniciado, el servidor estará disponible en:**
    ```bash
    http://localhost:3000/api/v1
    ```
___
## 📂 Estructura del proyecto
proyecto6
├── proyecto6frontendpart
├── public
├── src
     ├── api
|   |    ├── models
│   │   ├── character.js
│   │   └── platform.js
│   ├── routes
│   │   ├── characters.js
│   │   └── platforms.js
│   └── controllers
│    |   ├── character.js
│    │   └── platform.js
    ├── config
│   │    └── db.js
    ├── data
        └── charactersData.js
├── utils
    ├── movies.seed.js
├── .env
└── index.js

___ 

## 🔗 ENDPOINTS
## 🧍 Endpoints - Characters
| Método | Endpoint | Descripción | 
|:--------|:----------|:-------------|
| **GET** | `/api/v1/characters` | Obtiene todos los personajes. |
| **GET** | `/api/v1/characters/:id` | Obtiene un personaje por su ID. |
| **POST** | `/api/v1/characters` | Crea un nuevo personaje. | 
| **PUT** | `/api/v1/characters/:id` | Actualiza un personaje existente. |
| **DELETE** | `/api/v1/characters/:id` | Elimina un personaje por su ID. | 

## 🎮 Endpoints - Platforms
| Método | Endpoint | Descripción |
|:--------|:----------|:-------------|
| **GET** | `/api/v1/platforms` | Obtiene todas las plataformas. |
| **GET** | `/api/v1/platforms/:id` | Obtiene una plataforma por su ID. | 
| **POST** | `/api/v1/platforms` | Crea una nueva plataforma. | 
| **PUT** | `/api/v1/platforms/:id` | Actualiza una plataforma existente. | 
| **DELETE** | `/api/v1/platforms/:id` | Elimina una plataforma por su ID. |

___

### 🌱 Semilla
El proyecto incluye un **script de semilla** para poblar la base de datos con datos iniciales (characters y platforms).

- Conecta con la base de datos MongoDB usando Mongoose.  
- Crea **characters** y **platforms** iniciales si aún no existen.  
- Se desconecta automáticamente después de terminar el proceso.
___
### ✅ Checklist del proyecto
- CRUD completo para **characters** y **platforms**  
- Relación entre las colecciones  
- Al actualizar **platforms**, los **characters** existentes no se eliminan  
- Prevención de entradas duplicadas en los arrays relacionados  
- Incluye un script de semilla para poblar fácilmente la base de datos
---
### 🧑‍💻 Autor

Proyecto desarrollado por **Marta Ramírez Linares**  
💻 GitHub: https://github.com/Martaarl






