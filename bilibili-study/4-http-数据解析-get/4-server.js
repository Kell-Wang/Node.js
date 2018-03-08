const http =        require("http");
const urlLib =      require("url");


let server = http.createServer((request, respond) => {

    let obj = urlLib.parse(request.url, true);

    let url = obj.pathname;
    let GET = obj.query;

    console.log(obj);       /*{ protocol: null,slashes: null,auth: null,
                                host: null, port: null, hostname: null, hash: null,
                                search: '?name=WANG&pass=21456789',
                                query: { name: 'WANG', pass: '21456789' },
                                pathname: '/aaa',
                                path: '/?name=WANG&pass=21456789',
                                href: '/?name=WANG&pass=21456789' } */
    console.log(url);       //  "/aaa"
    console.log(GET);       //  { name: 'WANG', pass: '21456789' }
});

server.listen(8092);