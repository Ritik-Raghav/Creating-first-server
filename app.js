const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        console.log('Welcome home');
    }
    else if (req.url === '/about') {
        console.log('Welcome to About Us page');
    }
    else if (req.url === '/node') {
        console.log('Welcome to my Node Js project');
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to my Node Js project</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();

    process.exit();
})

server.listen(3000);