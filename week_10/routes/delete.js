import express from "express";//express에서 router함수를 사용하기 위해서 설정
import { selectSql, deleteSql } from "../database/sql";//../database/sql위치에서 selectSql, delete sql파일 사용

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {//완성된 총 채무는 localhost:3000/delete에 띄웁니다. 값을 받아오는 함수입니다.
    const debt = await selectSql.getDebt();
    res.render('delete', {
        title: "삭제 기능",
        debt
    })
});

// 삭제 버튼을 눌렀을 경우 해당 자료를 삭제하도록 해줍니다.
router.post('/', async (req, res) => {//deletedepartment.hbs에서 값을 받아서 처리하는 함수
    console.log('delete router:', req.body.delBtn);//입력한 값이 나오는지 확인, req.body.delBtn:Money 값을 불러옴

    const data = {//data.Dname에 Money값을 저장
        Money: req.body.delBtn,
    }

    await deleteSql.deleteDebt(data);//deletesql.js에 있는 delete 관련 함수를 호출

    res.redirect('/delete');//주소 localhost:3000/delete
});

module.exports = router;