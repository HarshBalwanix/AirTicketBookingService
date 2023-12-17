# Booking Service Express API

This repository contains an Express API server for a booking service, featuring Sequelize ORM integration. The project is structured with various components such as controllers, repositories, services, and a message queue system.

## Server Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/booking-service-express-api.git
   cd booking-service-express-api
   ```
2. **Install Dependencies:**
    ```bash 
   npm install
    ```
3. **Configure Settings:**
Adjust server and database configurations in `config/server-config.js` to fit your requirements.

4. **Run the Server:**
```bash
npm start
```

## Components
`index.js`
Express server setup and initialization, including middleware, routes, and server start logic.

`messagequeue.js`
Utility module for handling RabbitMQ message queue interactions, supporting message publishing and subscription.

`serverconfig.js`
Configuration file for server settings, such as port, message broker URL, exchange name, and binding key.

`booking-controller.js`
Express controller handling booking-related HTTP requests, including the creation of bookings and message queue event publishing.

`booking.js`
Sequelize model for the BOOKING entity, defining the structure and associations of booking data.

`booking-repo.js`
Repository handling database operations for the BOOKING entity, including creation and status updates.

`booking-service.js`
Service module orchestrating the booking creation process, involving interactions with the Flight Service and handling errors.

## Quick Start for Each Component
Navigate to each component's respective file and follow the instructions provided in the comments to set up and run.

Feel free to customize and extend this project to meet your specific booking service requirements.

**Note: Ensure that you have RabbitMQ installed and configured if you intend to use the message queue functionality.**
