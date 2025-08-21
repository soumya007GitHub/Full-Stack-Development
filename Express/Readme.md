# REST API Overview

A **REST API** (**Representational State Transfer Application Programming Interface**) is a way for different software applications to communicate with each other over the internet using a set of rules and conventions. It is one of the most widely used architectural styles for building web services.

---

## **What is REST?**
- REST is an **architectural style** created by **Roy Fielding**.
- It defines how web services should be designed so that they are **scalable**, **simple**, and **stateless**.
- REST APIs are commonly used for **client-server communication** — for example, when a **mobile app** communicates with a **server**.

> **Note:** API is a broader concept, and **REST API** is one specific type.

---

## **Common HTTP Methods in REST API**

| **HTTP Method** | **Purpose**            | **Example Endpoint**          |
|-----------------|------------------------|-------------------------------|
| **GET**        | Retrieve data          | `GET /api/users` → Get all users |
| **POST**       | Create new data        | `POST /api/users` → Add a new user |
| **PUT**        | Update existing data   | `PUT /api/users/5` → Update user 5 |
| **PATCH**      | Partially update data  | `PATCH /api/users/5` |
| **DELETE**     | Remove data            | `DELETE /api/users/5` → Delete user 5 |

---

## **Five Key Principles of REST**

### **1. Statelessness**
- **Definition:**  
  Each HTTP request from a client to a server must contain **all the information** needed to understand and process it.  
  The server **does not store any client session** between requests.
- **Meaning:**  
  The server treats **every request as independent** and doesn’t remember previous interactions.
- **Benefit:**  
  - Scalable and easier to maintain.
  - Every request includes **authentication tokens** or credentials for verification.

---

### **2. Uniform Interface**
- **Definition:**  
  REST uses a **consistent** and **standardized way** to access and manipulate resources.
- **Meaning:**  
  All REST APIs **follow the same structure** so developers can easily understand and integrate them.
- **Benefits:**  
  - Easy to learn and integrate.
  - Predictable URLs and responses.

---

### **3. Client-Server Decoupling**
- **Definition:**  
  REST separates the **client** (frontend/UI) from the **server** (backend/data).
- **Meaning:**  
  The client only needs to know **where** the server is and **what endpoints** are available — not how the server works internally.
- **Benefits:**  
  - **Independent development** → frontend and backend teams work separately.
  - Easier to **scale** and **maintain**.

---

### **4. Cacheability**
- **Definition:**  
  REST responses must define whether they are **cacheable** or not so that clients can **reuse previous responses**.
- **Meaning:**  
  Frequently requested data can be **stored temporarily** to avoid repeatedly fetching it from the server.
- **Benefits:**  
  - **Improves performance.**
  - **Reduces server load.**

---

### **5. Layered Architecture**
- **Definition:**  
  REST APIs can have **multiple layers** between the client and server, and each layer works **independently**.
- **Meaning:**  
  A request might pass through **proxies**, **load balancers**, **authentication layers**, or **CDNs**, but the client doesn’t need to know.
- **Benefits:**  
  - Improves **security**.
  - Supports **scalability**.
  - Enables **load balancing**.

---

## **Difference Between Params and Query**

| **Aspect** | **Params** | **Query** |
|-----------|-----------|-----------|
| **Definition** | Defines **which resource or category** we want to interact with. | Adds **filters or options** to refine the data. |
| **Usage** | Part of the **URL path**. | Part of the **URL after `?`**. |
| **Example** | `/users/123` → Fetch **user 123**. | `/users?limit=10` → Fetch **first 10 users**. |

---

## **Using Router for Modular Routes**

You can organize routes using Express Router and export them for use in your main app.

**tasks.router.js**
```javascript
const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res) => {
  res.send('Get all tasks');
});

router.post('/tasks', (req, res) => {
  res.send('Create a new task');
});

router.put('/tasks/:id', (req, res) => {
  res.send(`Update task with ID ${req.params.id}`);
});

router.delete('/tasks/:id', (req, res) => {
  res.send(`Delete task with ID ${req.params.id}`);
});

module.exports = router;
```

**users.router.js**
```javascript
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Get all users');
});

router.post('/users', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
```

---

## **Using `app.use` to Mount Routers**

In your main app file, you can use `app.use` to utilize these routers:

```javascript
const express = require('express');
const app = express();
const tasksRouter = require('./tasks.router');
const usersRouter = require('./users.router');

app.use('/', tasksRouter);
app.use('/', usersRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## **Route Parameters, Slugs, and Optional Parameters**

- **Route Parameters (Slugs):**  
  Used to capture dynamic values from the URL.

```javascript
app.get('/authors/:name', (req, res) => {
  res.send(`Author name: ${req.params.name}`);
});
```
Visiting `/authors/peter` will show `Author name: peter`.

- **Optional Parameters:**  
  Add a `?` after the parameter name.

```javascript
app.get('/books/:genre?', (req, res) => {
  if (req.params.genre) {
    res.send(`Genre: ${req.params.genre}`);
  } else {
    res.send('All genres');
  }
});
```
Visiting `/books/fiction` shows `Genre: fiction`, `/books` shows `All genres`.

---

## **Query Parameters**

- Used to filter or refine data, appear after `?` in the URL.

```javascript
app.get('/tasks', (req, res) => {
  const status = req.query.status;
  res.send(`Tasks with status: ${status}`);
});
```
Visiting `/tasks?status=done` will show `Tasks with status: done`.

---

## **Difference Between Params and Query**

| **Aspect** | **Params** | **Query** |
|-----------|-----------|-----------|
| **Definition** | Defines **which resource or category** we want to interact with. | Adds **filters or options** to refine the data. |
| **Usage** | Part of the **URL path**. | Part of the **URL after `?`**. |
| **Example** | `/users/123` → Fetch **user 123**. | `/users?limit=10` → Fetch **first 10 users**. |

---

## **Summary**
- A **REST API** enables communication between applications over the internet using **HTTP**.
- It relies on **statelessness**, **uniform interfaces**, **client-server decoupling**, **cacheability**, and **layered architecture**.
- Common HTTP methods include **GET**, **POST**, **PUT**, **PATCH**, and **DELETE**.
- URL **params** define **what resource** you want, while **query parameters** define **filters or options**.
- Use **Express Router** and `app.use` for modular and maintainable route definitions.
- Route parameters and queries allow for dynamic and flexible endpoints.
