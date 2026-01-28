const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Get port from environment variable (provided by Passenger) or use 30003 as default
const port = parseInt(process.env.PORT, 10) || 30003;
const dev = process.env.NODE_ENV !== 'production';

// Initialize Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

// Prepare the app and start the server
app.prepare().then(() => {
  // Create HTTP server
  const server = createServer((req, res) => {
    // Handle all requests through Next.js
    return handle(req, res);
  });

  // Listen on the specified port
  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
    console.log(`> PORT: ${port}`);
  });

  // Graceful shutdown handling
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  });
}).catch((err) => {
  console.error('Error preparing Next.js app:', err);
  process.exit(1);
});