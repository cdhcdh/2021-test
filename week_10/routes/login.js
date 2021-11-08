import express from "express";//express에서 router함수를 사용하기 위해서 설정
import { selectSql } from "../database/sql";//../database/sql위치에서 selectSql파일 사용

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});//login.hbs 파일을 찾아서 웹브라우저에 뿌려주기 위해서 사용되는 함수

router.post('/', async (req, res) => {//admin일때 delete 페이지로 가고 일반 유저일때는 select 페이지로 가도록 도와주는 함수
    const vars = req.body;
    const users = await selectSql.getUsers();//selectSql.getUsers에서 정보를 가져와서 const users에 저장
    let whoAmI = '' //let은 값을 바꿀 수 있는 변수에 쓰입니다. let형 변수 whoAMI 선언
    let checkLogin = false; //let은 값을 바꿀 수 있는 변수에 쓰입니다. let형 변수 checklogin 선언

    users.map((user) => {//배열의 요소를 비교해서 admin인지 users인지 판단해주는 함수
        if (vars.id === user.Id && vars.password === user.Password) {
            checkLogin = true;
            if (vars.id === 'admin') {
                whoAmI = 'admin';
            } else {
                whoAmI = 'users';
            }
        }
    })

    console.log('whoAmI:', whoAmI);//whoAmI값을 출력

    if (checkLogin && whoAmI === 'admin') {//whoAmI가 admin 이면 아래의 페이지로 이동합니다.
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'users') {//whoAmI가 users 이면 아래의 페이지로 이동합니다.
        res.redirect('/select');
    } else {//whoAmI가 users와 admin이 아닐시 아래의 내용을 /위치에 출력합니다.
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    }
})

module.exports = router;