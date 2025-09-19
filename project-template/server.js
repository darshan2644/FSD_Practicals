// server.js - Simple Express.js Project Template
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Home route - Greeting message for team onboarding
app.get('/home', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Our Team</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 40px 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                color: white;
            }
            .container {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 40px;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            }
            h1 {
                font-size: 3em;
                margin-bottom: 20px;
                background: linear-gradient(45deg, #fff, #f0f8ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .greeting {
                font-size: 1.5em;
                margin-bottom: 30px;
                line-height: 1.6;
            }
            .dashboard-info {
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 15px;
                margin: 30px 0;
                border-left: 4px solid #ffd700;
            }
            .next-steps {
                text-align: left;
                margin-top: 30px;
            }
            .next-steps li {
                margin: 10px 0;
                font-size: 1.1em;
            }
            .footer {
                margin-top: 40px;
                font-size: 0.9em;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎉 Welcome to the Team!</h1>
            
            <div class="greeting">
                <p>Hello and welcome to our development team! 👋</p>
                <p>This is your starting point for building amazing web applications.</p>
            </div>

            <div class="dashboard-info">
                <h2>📊 Dashboard Foundation</h2>
                <p>This /home route will serve as the foundation for your future dashboard pages. 
                Use this template as a starting point for your web applications.</p>
            </div>

            <div class="next-steps">
                <h3>🚀 Next Steps:</h3>
                <ul>
                    <li>Customize this greeting message</li>
                    <li>Add your dashboard components</li>
                    <li>Implement user authentication</li>
                    <li>Connect to your database</li>
                    <li>Add more routes and features</li>
                </ul>
            </div>

            <div class="footer">
                <p>Express.js Project Template • Ready for Development</p>
                <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
        </div>
    </body>
    </html>
  `);
});

// Root route - redirects to home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// API route for JSON response
app.get('/api/welcome', (req, res) => {
  res.json({
    message: "Welcome to the team!",
    status: "success",
    timestamp: new Date().toISOString(),
    route: "/home",
    purpose: "Team onboarding and dashboard foundation"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/home">Go to Home</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Project Template Server Running!`);
  console.log(`📍 Server: http://localhost:${PORT}`);
  console.log(`🏠 Home: http://localhost:${PORT}/home`);
  console.log(`📡 API: http://localhost:${PORT}/api/welcome`);
  console.log(`✅ Ready for team onboarding!`);
});

export default app;