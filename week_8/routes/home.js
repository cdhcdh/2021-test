import express from "express";//express에서 router함수를 사용하기 위해서 설정
import { insertSql } from "../database/sql";//../database/sql위치에서 insertSql파일 사용

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});//home.hbs 파일을 찾아서 웹브라우저에 뿌려주기 위해서 사용되는 함수

router.post('/', (req, res) => {//넘겨 받은 데이터를 vars, vars_lenth 변수에 넣는 함수
const vars = req.body;
const var_lenth = Object.keys(req.body).length;

if (var_lenth > 4) {//넘어오는 데이터 갯수로 employee와 deqerment를 판단
    const data = {
    Fname: vars.fname,
    Minit: vars.minit,
    Lname: vars.lname,
    Ssn: vars.ssn,
    Bdate: vars.bdate,
    Address: vars.address,
    Sex: vars.sex,
    Salary: vars.salary,
    Super_ssn: vars.super_ssn,
    Dno: vars.dno
};

insertSql.setEmployee(data);//setEmployee함수에 data를 넘겨줌
} else {
    const data = {
        Dname: vars.dname,
        Dnumber: vars.dnumber,
        Mgr_ssn: vars.mgr_ssn,
        Mgr_start_date: vars.mgr_start_date
    };

    insertSql.setDepartment(data);//setdepartment 함수에 data를 넘겨줌
}

    res.redirect('/');//입력하고 나서 어떤 페이지로 갈지 정하는 함수
})

module.exports = router;