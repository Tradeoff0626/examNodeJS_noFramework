// @ts-check

// 프레임워크를 사용하지 않은 간단한 웹 서버

/**
 * 블로그 포스팅 서비스
 * - DB : 로컬파일
 * - REST API 사용
 */

const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('List of posts');
  } else if (req.url && /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
    // req.url에 /posts/(문자 또는 숫자나 '-', '_') 패턴이 존재하는지 검사(test)하여 부합하면 처리됨
    res.statusCode = 200;
    res.end('Some contents of post');
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200;
    res.end('Creating post');
  } else {
    res.statusCode = 404;
    res.end('Not found!');
  }
});

server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`);
});
