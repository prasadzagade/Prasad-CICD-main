const express = require('express');
const app = express();
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Project Showcase - Gopal Vishwakarma</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #4a90e2;
            color: white;
            text-align: center;
            padding: 1em;
            border-radius: 5px;
        }
        h1 {
            margin-bottom: 0;
        }
        .subtitle {
            font-style: italic;
            margin-top: 0.5em;
        }
        section {
            margin-top: 2em;
        }
        h2 {
            color: #4a90e2;
        }
        .highlight {
            background-color: #fff3cd;
            padding: 0.5em;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <header>
        <h1>DevOps Project Showcase</h1>
        <p class="subtitle">By Gopal Vishwakarma</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>I'm Gopal Vishwakarma, a passionate DevOps engineer dedicated to streamlining software development processes and improving deployment efficiency.</p>
    </section>

    <section>
        <h2>Project Overview</h2>
        <p class="highlight">This project automates the process of building and deploying a web application using tools that streamline software development. Imagine you're creating a website; instead of manually writing code, testing it, and then setting it up on a server every time there's a change, this system does it all automatically.</p>
    </section>

    <section>
        <h2>Key Components</h2>
        <ul>
            <li><strong>Jenkins:</strong> Automation tool that pulls the latest code from a storage place (like GitHub), builds it into a complete package, and initiates the deployment process.</li>
            <li><strong>Docker:</strong> Provides a controlled environment for running the application, ensuring consistency across different stages of development and deployment.</li>
            <li><strong>GitHub:</strong> Stores and manages the source code, allowing for version control and collaborative development.</li>
        </ul>
    </section>

    <section>
        <h2>Benefits</h2>
        <p>This automated system ensures that every update to the website is quickly tested and deployed without manual intervention, keeping the website always up-to-date and working smoothly. Key advantages include:</p>
        <ul>
            <li>Faster development cycles</li>
            <li>Reduced manual errors</li>
            <li>Consistent deployment process</li>
            <li>Improved collaboration between development and operations teams</li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2024 Gopal Vishwakarma. All rights reserved.</p>
    </footer>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
