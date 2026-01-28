const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

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
    // Handle static file requests first
    const parsedUrl = parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Check if request is for a static file in public folder
    if (pathname.startsWith('/favicon') || pathname.startsWith('/site.webmanifest') || pathname.startsWith('/_next/static') || pathname.startsWith('/assets/') || pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg') || pathname.endsWith('.svg') || pathname.endsWith('.webp') || pathname.endsWith('.css') || pathname.endsWith('.js') || pathname.endsWith('.json')) {
      // Serve from public directory
      const filePath = path.join(__dirname, 'public', pathname);
      
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
          // File exists, serve it
          const ext = path.extname(filePath);
          const contentType = getContentType(ext);
          
          res.writeHead(200, { 'Content-Type': contentType });
          fs.createReadStream(filePath).pipe(res);
        } else {
          // File doesn't exist, pass to Next.js handler
          handle(req, res);
        }
      });
    } else {
      // Handle all other requests through Next.js
      handle(req, res);
    }
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

// Helper function to determine content type based on file extension
function getContentType(ext) {
  switch (ext) {
    case '.ico':
      return 'image/x-icon';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.svg':
      return 'image/svg+xml';
    case '.json':
      return 'application/json';
    case '.webmanifest':
      return 'application/manifest+json';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    default:
      return 'application/octet-stream';
  }
}