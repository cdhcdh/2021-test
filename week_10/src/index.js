import express from "express";//쓸려고 하는 모듈들을 선언
import logger from "morgan";
import path from "path";//주로 경로설정할때 많이 쓰는 모듈

import loginRouter from "../routes/login";//사용자가 원하는 파일의 참조하고 싶을때는 현재 폴더 기준에서 주소를 써서 사용합니다. 로그인 관련 주소 파일 참조
import selectRouter from "../routes/select";//입력 관련 주소 파일 참조
import deleteRouter from "../routes/delete";//삭제 괸련 주소 파일 참조

const PORT = 3000;//포트 번호 설정 변하지 않는 값이기 때문에 const 선언, 3000으로 설정하여 주었습니다.

const app = express();//서버를 알아서 연결해주는 모듈

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'hbs')

    app.use(logger("dev"));

    app.use('/', loginRouter);
    app.use('/select', selectRouter);
    app.use('/delete', deleteRouter);

    app.listen(PORT, () => {
     console.log(`Example app listening at http://localhost:${PORT}`)
    })