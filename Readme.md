#LoginLogoutWith JWT

/******GetUser*****/
(GET)> http://localhost:5000/api/auth/users

/******Register*****/
(POST)> http://localhost:5000/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","role":"admin"}

/******Login*****/
(POST) => http://localhost:5000/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,}

/******UserInfo*****/
(GET) => http://localhost:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}

/*****Item Listing*****/
(GET) => http://localhost:5000/api/ncr/breakfast
(respoonse)

(GET) => http://localhost:5000/api/ncr/Dinner
(respoonse)

/*****Item Details*****/
(GET) => http://localhost:5000/api/ncr/breakfast
(respoonse)