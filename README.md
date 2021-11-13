# 2021-test
# 3주차 8주차 10주차 테이블 설명


<br>

## <span style="color:red">3주차 student 테이블</span>

studentNumber|Name|Major|Grade|AdmissonDate|Email
---|---|---|---|---|---|
12162155|donghee|ICT|4|2016.03.01|dod7000@nave.com

## 3주차 테이블 설명
1. student table
    > 해당 테이블은 학생의 정보를 나타내는 테이블로 학생의 학번과 번호 이름 전공등 학생의 정보관련 요소로 이루어져 있습니다. studentNumber을 pk로 설정해주었습니다.

<br>

## <span style="color:red">8주차 직원 테이블</span>

fname|minit|lname|ssn|bdate|address|sex|salary|super_ssn|dno
---|---|---|---|---|---|---|---|---|---|
mihae|m|kim|12345678|2000.03.24|부산|f|300|1111115|4

## <span style="color:red">8주차 부서 테이블</span>

dname|dnumber|Mgr_ssn|mgr_start_date|
---|---|---|---|
재무|1|123456789|4|2000.07.05

## 8주차 테이블 설명
1. 직원 table
    > 해당 테이블은 직원의 정보를 나타내는 테이블로 직원의 이름 성 번호 주소등 회사를 이루고 있는 직원들의 개인정보로 이루어져 있습니다. ssn을 pk로 지정해주었습니다.
2. 부서 table
    > 해당 테이블은 부서의 정보를 나타내는 테이블로 부서의 이름과 생성날짜 번호등 회사를 이루고 있는 부서의 정보로 이루어져 있습니다. dnumber을 pk로 지정해주었습니다.
3. 추가적인 특징: ssn과 mgr_ssn이 fk 관계로 연결되어 있습니다.

<br>

## <span style="color:red">10주차 채무 테이블</span>

Dname|Money|
---|---|
김진수|70000

## 10주차 테이블 설명
1. 채무자 table
    > 해당 테이블은 dname과 money로 이루어져 있는데 이는 필자에게 돈을 빌린 사람의 이름과 금액입니다. 위 두가지 요소로 이루어져 있는 채무관련 테이블입니다.




