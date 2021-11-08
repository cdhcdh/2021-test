import express from "express";//express에서 router함수를 사용하기 위해서 설정
import { selectSql } from "../database/sql";//../database/sql위치에서 selectSql파일 사용

const router = express.Router();

router.get('/', async function(req, res) {// /밖에 없지만 실제로는 /select/가 생략되어 있습니다. 웹에서는 /select/로 보입니다.
    const employee = await selectSql.getEmployee();//해당함수에서 원하는 값을 불러와 employee에 저장합니다.
    const department = await selectSql.getDepartment();//해당함수에서 원하는 값을 불러와 department에 저장합니다.

    res.render('select', {//select.hbs 파일과 연결 시켜줍니다. 
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;