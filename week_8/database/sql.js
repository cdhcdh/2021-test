//삽입, 업데이트, 조회 3가지 역할을 모두 수행
import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',//본인의 db id
        database: 'week8',//데이터베이스 이름
        password: '03240324',//본인의 비밀번호
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async 와 await 사용
const promisePool = pool.promise();

// selec query
export const selectSql = {//외부에서 함수를 가져다 쓸려면 expoer를 붙여야합니다.
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows
    },
}

// insert query
export const insertSql = {//외부에서 함수를 가져다 쓸려면 expoer를 붙여야합니다.
// data 라는 객제 타입의 파라미터에 입력할 정보를 받아서 query 문 생성
setEmployee : async (data) => {//home.js에서 만든 데이터를 받음, ``는 ""와 다르게 ${}처럼 변수를 쓸 수 있기때문에 사용합니다.
    const sql = `insert into employee values (
        "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
        "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

        await promisePool.query(sql);//query라는 것을 실행하면 query가 sql을 실행합니다.
    },
 // data 라는 객제 타입의 파라미터에 입력할 정보를 받아서 query 문 생성, ``는 ""와 다르게 ${}처럼 변수를 쓸 수 있기때문에 사용합니다.   
setDepartment : async (data) => {//home.js에서 만든 데이터를 받음
    const sql = `insert into department values (
        "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

        await promisePool.query(sql);//query라는 것을 실행하면 query가 sql을 실행합니다.
    },
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Minit = "m"`;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정 단 위의 경우와 다르게 ${}를 사용해서 변수의 값으로 수정
    const sql = `update department set dname = "${data.Dname}" where Dnumber = 11`;
    await promisePool.query(sql);
    },
}