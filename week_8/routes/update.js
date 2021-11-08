import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/employee', async (req, res) => {//완성된 총 부서는 localhost:3000/update/employee, 값을 받아오는 함수
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존의 입력 값 불러오기
router.get('/department', async (req, res) => {//완성된 총 부서는 localhost:3000/update/department, 값을 받아오는 함수
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

//수정 버튼을 눌렀을 경우 update query 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {//updateDepartment.hbs에서 값을 받아서 처리하는 함수
    const vars = req.body;
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);//sql.js에 있는 update 관련 함수를 호출

    res.redirect('/select');//주소 localhost:3000/select
});

// 수정 버튼을 눌렀을 경우 update query를 실행하여 조회 페이지로 이동
router.post('/department', async (req, res) => {//updateEmployee.hbs에서 값을 받아서 처리하는 함수
    const vars = req.body;
    console.log(vars.dname);//입력한 값이 나오는지 확인

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);//sql.js에 있는 update 관련 함수를 호출

    res.redirect('/select');//주소 localhost:3000/select
});

module.exports = router;