# Zerodha Clone

A full-stack clone of [Zerodha](https://zerodha.com), a popular Indian stock trading platform. This project recreates the landing page and the trading dashboard, with a working backend for login, signup, and placing orders.

> ⚠️ This is a learning project. It is not connected to real stock market data or real money.

## What it does

- 🔐 User signup and login (with hashed passwords and JWT-based authentication)
- 📊 A trading dashboard showing Holdings, Positions, Orders, and a Watchlist
- 🟢 Buy and Sell windows to place new orders
- 🌐 A landing/marketing site (Home, Products, Pricing, About, Support, Signup)

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB with Mongoose
- JWT (jsonwebtoken) for authentication
- bcryptjs for password hashing

**Frontend (landing page)**
- React
- React Router
- Axios

**Dashboard (trading app)**
- React
- Material UI (MUI)
- Chart.js
- Axios

## Project Structure

```
zerodha-clone/
├── backend/       # Express API server + MongoDB models
├── frontend/      # Landing/marketing website (React)
└── dashboard/     # Trading dashboard (React)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A MongoDB database (either installed locally, or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)

### 1. Clone the repo

```bash
git clone https://github.com/tanmaypawar23/zerodha-clone.git
cd zerodha-clone
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder with:

```
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=any_random_secret_string
```

Start the backend:

```bash
npm start
```

The API will run at `http://localhost:3002`.

### 3. Set up the dashboard

```bash
cd ../dashboard
npm install
npm start
```

The dashboard will run at `http://localhost:3000` (or another port if 3000 is busy).

### 4. Set up the frontend (landing page)

```bash
cd ../frontend
npm install
npm start
```

## API Endpoints

| Method | Endpoint        | Description                     | Auth Required |
| ------ | --------------- | -------------------------------- | -------------- |
| POST   | `/signup`       | Create a new user                | No             |
| POST   | `/login`        | Log in and get a token           | No             |
| GET    | `/allHoldings`  | Get all holdings                 | Yes            |
| GET    | `/allPositions` | Get all positions                | Yes            |
| GET    | `/allOrders`    | Get all orders                   | Yes            |
| POST   | `/newOrder`     | Place a new buy/sell order       | Yes            |

For routes marked "Auth Required", send the token in the request header like this:

```
Authorization: Bearer <your_token_here>
```

## Roadmap / Known Issues

- [ ] Connect Buy/Sell requests to send the auth token
- [ ] Load Holdings and Positions from the backend instead of sample data
- [ ] Move hardcoded `localhost` URLs into environment variables
- [ ] Deploy a live demo

## License

This project is for learning purposes.
