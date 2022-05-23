// console.log("Hello World")

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>psudeo selectors</title>
    <style>
        * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bold;
        }

        .contanier {
            border: 2px solid red;
            background-color: rgb(223, 245, 201);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }

        a {
            text-decoration: none;
        }

        /* a:visited{
            color: yellow;
        } */
        .btn {
            background: brown;
            padding: 6px;
            border: cyan solid 3px;
            cursor: pointer;
            border-radius: 4px;
            font-size: 15px;
            color: orange;
        }

        .btn:hover {
            color: palegreen;
            background-color: rgb(164, 57, 57);
        }
    </style>
</head>

<body>
    <div class="contanier" id="cot1">
        <h2>psudeo selectors</h2>
        <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, officiis maiores alias eaque ut esse
            similique. Illum delectus deserunt optio sapiente harum? Sint similique ipsum possimus, esse magni
            cupiditate nisi mollitia necessitatibus voluptatibus rem illum ducimus itaque, veniam ut. Hic, quidem saepe!
        </P>
        <a href="https://www.lipsum.com/" class="btn"> Read more</a>
        <button class="btn"> Contact us</button>
    </div>
</body>

</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});