//삽입, 삭제, 조회 3가지 역할을 모두 수행
import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',//본인의 db id
        database: 'week10',//데이터베이스 이름
        password: '03240324',//본인의 비밀번호
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async 와 await 사용
const promisePool = pool.promise();

// select query문 입니다. 입력 관련 역할을 수행합니다.
export const selectSql = {//외부에서 함수를 가져다 쓸려면 expoer를 붙여야합니다.
    getUsers : async () => {//users 테이블 값을 가져옵니다.
        const [rows] = await promisePool.query(`select * from user`);
        
        return rows
    },
    getDebt : async () => {//debt 테이블 값을 가져옵니다.
        const [rows] = await promisePool.query(`select * from debt`);
        
        return rows
    },
}

// delete query문 입니다. 삭제관련 역할을 수행압니다.
export const deleteSql = {
    deleteDebt : async (data) => {
        // where문을 사용하여 MONEY = ${data.Money} 조건을 설정해주어 채무관계가 완료된 사람들을 삭제할 수 있도록하였습니다.
        console.log('deleteSql.deleteDebt:', data.Money);
        const sql = `delete from debt where Money = "${data.Money}"`;
        await promisePool.query(sql);
        },
}