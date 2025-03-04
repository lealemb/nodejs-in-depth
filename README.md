# **Node.js In-Depth Tutorial – Dave Gray**

This repository follows the **Node.js in-depth tutorial with Dave Gray**, covering essential concepts 
such as modules, file handling, HTTP servers, middleware, and working with databases.

## **📌 Features**
✔️ Understanding Node.js and its architecture  
✔️ Working with modules and the CommonJS/ES modules system  
✔️ Handling file operations using `fs` module  
✔️ Creating and managing HTTP servers  
✔️ Using middleware and Express.js  
✔️ Connecting to a database  MongoDB  
✔️ Building RESTful APIs  
✔️ Handling authentication and security  

## **🛠 Installation**
1. **Clone the repository**  
   ```sh
   git clone https://github.com/lealemb/nodejs-in-depth.git
   cd nodejs-in-depth
   ```  
2. **Install dependencies**  
   ```sh
   npm install
   ```  
3. **Run the project**  
   ```sh
   node index.js  # Or use nodemon for auto-reloading
   ```  

## **📁 Project Structure**
```
/nodejs-in-depth
│── /public          # Static files (HTML, CSS, JS)
│── /routes          # Route handlers
│── /controllers     # Business logic
│── /models          # Database schemas
│── /middleware      # Custom middleware
│── /config          # Configurations (DB, env variables)
│── index.js         # Main server entry point
│── package.json     # Dependencies and scripts
│── README.md        # Documentation
```

## **🚀 Running the Server**
To start a basic Node.js server:  
```sh
node index.js
```
For development, use **Nodemon** for live reloading:  
```sh
npx nodemon index.js
```

## **🔗 API Endpoints (If applicable)**
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/users`   | Fetch all users         |
| POST   | `/api/users`   | Create a new user       |
| GET    | `/api/users/:id` | Fetch user by ID     |
| PUT    | `/api/users/:id` | Update user by ID    |
| DELETE | `/api/users/:id` | Delete user by ID    |

## **🔧 Technologies Used**
- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework  
- **MongoDB / MySQL** – Database (optional)  
- **Mongoose / Sequelize** – ORM for database handling  
- **JWT / bcrypt** – Authentication and security  

## **📚 Resources & Learning Materials**
- [Node.js Official Docs](https://nodejs.org/en/docs/)  
- [Dave Gray’s YouTube Playlist](https://www.youtube.com/@DaveGray)  
- [Express.js Guide](https://expressjs.com/en/starter/hello-world.html)  

## **📝 Contributing**
Feel free to fork, modify, and submit pull requests. Any contributions are welcome!  

---
