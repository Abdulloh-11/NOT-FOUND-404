import http from 'node:http';
import fs from 'node:fs';
import {join} from 'node:path';

const PORT = 5000;

function serverFunction(req, res) {
    let filePath = join(process.cwd());

    console.log(req.url)
    switch (req.url) {
        case '/':
            let file = fs.readFileSync(join(filePath, 'public', 'html', 'index.html'));

            res.write(file);
            break;
        case '/about':
            let file2 = fs.readFileSync(join(filePath, 'public', 'html', 'about.html'));
            res.write(file2);
            break;
        case '/faq':
            let file3 = fs.readFileSync(join(filePath, 'public', 'html', 'faq.html'));
            res.write(file3);
            break;
        default:
            try{
                filePath += join('/public', req.url);
                console.log(filePath);
                fs.accessSync(filePath, fs.constants.F_OK)
                const data = fs.readFileSync(filePath);
                res.write(data);
            } catch (err) {
                res.statusCode = 404;
                res.end('FILE NOT DEFINED');
            }

    }

    res.end();

}




const server = http.createServer(serverFunction);
server.listen(PORT, () => console.log('Server is running...'));