# 2021-test
-데이터베이스 설계

## 3주차 실습 실행 방법
1. 레포지토리 복사
    - SSH를 사용하는 경우와 TOKEN을 사용하는 경우로 나뉨
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 정보 입력

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'tutorial',
        password: 'password',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능학과|인공지능|12181111|

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.
