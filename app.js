// Membuat secara lebih ringkas dibanding appcopy.js
const http = require("http");
const fs = require("fs");
const port = 3000;

// buat fungsi render untuk membuka halaman
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("Error: File not found");
        } else {
            res.write(data);
        }
        res.end();
    });
};

http
    .createServer((req, res) => {
        const url = req.url;

        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        if (url === "/about") {
            renderHTML("./about.html", res)
        } else if (url === "/contact") {
            renderHTML("./contact.html", res);
        } else {
            renderHTML("./index.html", res);
        }
    })

    .listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
