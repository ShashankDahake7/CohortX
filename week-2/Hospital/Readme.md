# Kidney Management API

This is a simple **Express.js** API that manages kidney-related data for a single user, **Shashank**. The API allows CRUD (Create, Read, Update, Delete) operations on Shashank's kidneys.

## Features
- Retrieve the number of **healthy** and **unhealthy** kidneys.
- Add a new kidney (healthy or unhealthy).
- Update all kidneys to be healthy.
- Remove all unhealthy kidneys.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ShashankDahake7/Hospital.git
   cd Hospital
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```

The server will start on **port 3000**.

## API Endpoints

### **1. Get Kidney Data**
**GET /**
#### Response Example:
```json
{
  "shashankKidneys": [
    { "healthy": true },
    { "healthy": false }
  ],
  "numberOfHealthyKidneys": 1,
  "numberOfUnhealthyKidneys": 1
}
```

### **2. Add a Kidney**
**POST /**
#### Request Body:
```json
{
  "isHealthy": true
}
```
#### Response:
```json
{
  "msg": "Done"
}
```

### **3. Make All Kidneys Healthy**
**PUT /**
#### Response:
```json
{
  "msg": "Done"
}
```
**Error (if all kidneys are already healthy):**
```json
{
  "msg": "All kidneys are already healthy"
}
```

### **4. Remove Unhealthy Kidneys**
**DELETE /**
#### Response:
```json
{
  "msg": "Done"
}
```
**Error (if no unhealthy kidneys exist):**
```json
{
  "msg": "You have no unhealthy kidneys"
}
```

## Helper Functions
- `areAllKidneysHealthy()`: Checks if all kidneys are healthy.
- `isThereOneUnhealthyKidney()`: Checks if there is at least one unhealthy kidney.