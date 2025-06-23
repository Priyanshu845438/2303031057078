# Make Short URL - Backend (Node.js + Express)
---

## Project Info

- **Name**: Priyanshu Raj  
- **Roll No**: 2303031057078  
- **University**: Parul University  
- **Submission**: Backend Test Submission

---

## Features

- Create short URL from long URL  
- Set optional expiry time (in seconds)  
- View analytics (click count + timestamps)  
- Middleware for request logging  
- Uses `.env` for environment configuration

---

## Technologies Used

- Node.js  
- Express.js  
- Nanoid (for shortcode generation)  
- Moment.js (for time handling)  
- Morgan (request logging)  
- dotenv (environment variables)

---

## Folder Structure
- Controllers/ shortUrlController.js
- middleware/ logger.js
- routes/ urlRoutes.js
- utils/ generateShortCode.js
- .env
- index.js
- log.txt 

# API Endpoints
#### POST http://localhost:5000/shorten
Body:<br>
{<br>
  "url": "https://www.google.com",<br>
  "expiry": 120<br>
}

---

#### GET http://localhost:5000/hoVS2U

---

#### GET http://localhost:5000/hoVS2U/analytics
