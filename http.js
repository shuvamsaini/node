const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our homepage");
    }

     else if(req.url === "/about"){
        res.end("This is our about section");
    }

    else{

        res.end(
            `<h1>OOPS</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href = "/"> back to home </a>
            `
        );
    }
   

});

const port = 5000;
server.listen(port, ()=>{
    console.log("Server is running at port", port);
});