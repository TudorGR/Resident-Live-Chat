# Resident-Live-Chat

A real-time chat application built with Angular (frontend) and Node.js + Socket.IO (backend).

## Prerequisites

- Node.js (v18 or higher)
- npm (v11.6.2 or higher)

## Project Structure

```
Resident-Live-Chat/
./client
./server
```

## Installation

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Start the Backend Server

From the `server` directory:

**Development mode (with auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start at `http://localhost:5000`

### Start the Frontend Application

From the `client` directory:

```bash
npm start
```

The Angular development server will start at `http://localhost:4200`

## Usage

1. Start the backend server first
2. Start the frontend application
3. Open your browser and go to `http://localhost:4200`
4. Use the chat

## Features

- Real-time messaging using Socket.IO
- User connection/disconnection notifications
- Active users count
- Message timestamps
- User identification with unique colors

## Technologies Used

### Backend

- Express.js
- Socket.IO
- Nodemon

### Frontend

- Angular 21
- Socket.IO Client
- SCSS
- TypeScript
