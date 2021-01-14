#Management System
React, node.js, AWS RDS를 사용한 CRUD + @
- node.js: express, axios, multer등을 활용해서 React dev server에 REST API 제공
- React: MaterialUI로 기본적인 UI 구성, 필터함수로 search 기능 구현
- AWS RDS: 프리티어 MySQL, 외부 시스템에선 HeidiSQL 등으로 접근 및 수정 가능.

##기능 
### search
 - 서치 바에 입력한 문자열이 포함된 이름을 갖는 데이터만 출력하도록 단순한 필터구현
![search](https://user-images.githubusercontent.com/48829883/104587244-01d38300-56aa-11eb-9c85-7ca906b6a949.mp4)

### Create
 - '고객 추가하기' 버튼으로 Dialog를 띄워 폼 데이터를 받아서 POST방식으로 REST API 호출하여 데이터베이스에 입력한 데이터 추가 
 -  axios 모듈의 post를 사용해서 간편하게 구현
 ![create](https://user-images.githubusercontent.com/48829883/104588523-d5b90180-56ab-11eb-98f8-dbf0cb5fd2a1.mp4)

### Read
 - GET방식으로 REST API 호출하여 데이터베이스에 있는 모든 데이터 가져옴.
 - fetch 함수 사용

### Delete
 - '삭제' 버튼으로 Dialog를 띄워 삭제여부 선택 후 DELETE방식으로 REST API 호출하여 데이터베이스에서 해당 데이터 삭제.
 - fetch 함수 사용
 ![delete](https://user-images.githubusercontent.com/48829883/104588727-26c8f580-56ac-11eb-9bcb-36f697c8df3b.mp4)


## 자세한 구현 설명
https://suuntree.tistory.com/328


 ## PS
 instructor : 나동빈 (https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw)