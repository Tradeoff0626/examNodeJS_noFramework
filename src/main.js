// @ts-check

// 프레임워크를 사용하지 않은 간단한 웹 서버

/**
 * 블로그 포스팅 서비스
 * - DB : 로컬파일
 * - REST API 사용
 */

const http = require('http');

const PORT = 4000;

// JSDoc 설정(https://jsdoc.app/)
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

// JSDoc 설정한 Post 사용 샘플 (위 @typedef 설정대로 아래 @type 객체를 사용하지 않으면 경고문 발생)
/** @type {Post} */
const examPost = {
  id: 1,
  title: 'exam title',
  // content: 'exam content',
};

console.log(examPost);

const server = http.createServer((req, res) => {
  const POST_REGEXP = /^\/posts\/([a-zA-Z0-9-_]+)$/; // 캡쳐 그룹 기능 활용 [() 괄호 묶음 부분]

  // 검사만 하는 test()와 다르게 exec()는 실행하여 관련 정보를 배열 값으로 가짐
  const regexpResult = (req.url && POST_REGEXP.exec(req.url)) || undefined;

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('List of posts');
  } else if (regexpResult && req.method === 'GET') {
    // console.log(regexpResult);
    // ex. '/posts/1'인 경우. [ '/posts/1', '1', index: 0, input: '/posts/1', groups: undefined ]

    // eslint-disable-next-line no-console
    console.log(`post_id : ${regexpResult[1]}`);

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
  // eslint-disable-next-line no-console
  console.log(`The server is listening at port: ${PORT}`);
});
