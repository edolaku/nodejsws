const http = require("http");
const fs = require("fs");

const port = 3000;

http
    .createServer((req, res) => {
        // 200 adalah status code. jadi jika status code yg dikembalikan 200, maka jalankan perintah Content-Type
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        const url = req.url;
        // ketika masuk ke halaman about, maka tampilkan perintah selanjutnya
        if (url === "/about") {
            res.write("<h1>Ini adalah halaman about</h1>");
            res.end();

            // ketika masuk ke halaman contact, maka tampilkan perintah selanjutnya
        } else if (url === "/contact") {
            res.write("<h1>Ini adalah halaman contact</h1>");
            res.end();

            // dan else, tampilkan perintah selanjutnya
        } else {
            // menampilkan halaman default ketika menjalankan program. yaitu halaman index
            fs.readFile("./index.html", (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write("file not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
        }
    })
    .listen(port, () => {
        console.log(`Server is listening  on port ${port}..`);
    })