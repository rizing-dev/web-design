import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10); // Default to 3000 if no PORT is specified.

const dev = process.env.NODE_ENV !== 'production'; // Check if we're in development mode
const app = next({ dev }); // Initialize Next.js app with dev mode
const handle = app.getRequestHandler(); // Request handler for Next.js

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url ?? '', true); // Ensure req.url is not null or undefined
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });
});
