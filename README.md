<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Shopping-SpringBoot&fontSize=70" width=100% />


<div align='center'>    
	<a href="https://github.com/DevDachan/React_Shopping/graphs/contributors">    
	  <img src="https://img.shields.io/github/contributors/DevDachan/React_Shopping" alt="contributors" />      
	</a>    
	<a href="">   
	<img src="https://img.shields.io/github/last-commit/DevDachan/React_Shopping" alt="last update" />   
	</a>   
	<a href="https://github.com/DevDachan/React_Shopping/network/members">   
	<img src="https://img.shields.io/github/forks/DevDachan/React_Shopping" alt="forks" />   
	</a>   
	<a href="https://github.com/DevDachan/React_Shopping/stargazers">   
	<img src="https://img.shields.io/github/stars/DevDachan/React_Shopping" alt="stars" />   
	</a>   
	<a href="https://github.com/DevDachan/React_Shopping/issues/)">   
	<img src="https://img.shields.io/github/issues/DevDachan/React_Shopping" alt="open issues" />   
	</a>
</div>   



<div align='center'>
	<img src="https://img.shields.io/badge/SpringBoot-007396?style=flat&logo=SpringBoot&logoColor=white"/>
	<img src="https://img.shields.io/badge/React-007396?style=flat&logo=React&logoColor=white"/>
	<img src="https://img.shields.io/badge/JavaScript-007396?style=flat&logo=JavaScript&logoColor=white"/>
	<img src="https://img.shields.io/badge/MariaDB-4479A1?style=flat&logo=MariaDB&logoColor=white"/>
	<img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=flat&logo=Apache Tomcat&logoColor=white"/>
	<img src="https://img.shields.io/badge/JQuery-0769AD?style=flat&logo=JQuery&logoColor=white"/>
	<img src="https://img.shields.io/badge/HTML-007396?style=flat&logo=HTML5&logoColor=white"/>
	<img src="https://img.shields.io/badge/CSS-F43059?style=flat&logo=CSS Wizardry&logoColor=white"/>
	<img src="https://img.shields.io/badge/Bootstrap-F43059?style=flat&logo=Bootstrap&logoColor=white"/>
	
</div>
<br/>

## :computer: 프로젝트 소개 \(개인\)
**다음 주소찾기 API, 문자 전송 API, 메일 발송 API등 오픈 API를 사용해 만들어진 개인 쇼핑몰 서비스입니다.**

<img src="https://user-images.githubusercontent.com/111109411/230763151-8a9e4331-6210-41ad-b6d3-0fc18b54bdcb.png" width=70%>

<img src="https://user-images.githubusercontent.com/111109411/228116610-551bbe11-6930-4e63-a223-67162b676135.png" width=70%>

<img src="https://user-images.githubusercontent.com/111109411/230763153-c666fbfd-e619-4911-a077-59dcd7eba5f7.png" width=70%>

  
  


# 🗓️ 프로젝트 기간

### 2023.03.05 ~ Now

# 🌟 프로젝트 설명

## 주제

- **사용자 요구사항을 바탕으로 개인 쇼핑몰 웹 서비스를 구현한다. 쇼핑몰에서는 주소 검색, 주문 이후 문자 발송, 메일 인증 및 문의 내역 관리와 같은 기능을 위해 여러 오픈 API를 사용해야 한다.**

## 기획 배경

- 사용자가 특정 물건을 판매하고 싶지만 긱몬, Witchform과 같은 서비스들은 회원가입등이 필요하고 다른 서비스의 경우 수수료가 너무 많이 들어 개인이 관리 할 수 있는 서비스가 있었으면 좋겠다고 해서 프로젝트를 기획하게 됐다.
- 각각의 모든 구성은 혼자 진행을 하며 프론트 엔드 측 디자인의 경우 사용자의 요구사항에 맞게 구성을 한다.

## 서비스 대상

- 개인 쇼핑몰을 운영하고 싶은 사람
- 다양한 오픈 API를 활용한 기능이 필요한 사람.

## 서비스 목적

- 쇼핑몰을 관리하며 사람들이 쉽게 주문이 가능하도록 해야 한다.
- 관리자가 상품 관리를 위한 쉬운 인터페이스가 제공이 되어야 한다.
- 서버-클라이언트 구조로 Spring Boot와 React를 사용함으로써 각각의 기능을 분리 시킨다.


[초기 기능 디자인 Figma](https://www.figma.com/file/ndJjGc6edEYel3tvo5ZsKr/Untitled?node-id=1%3A2&t=K6SYZlhiHiuidXpb-1)
- 전체적인 디자인이 아닌 각각의 페이지에 어떤 기능들을 넣을지 구상한 내용입니다.

<br/>


## 컴포넌트 구조
```
components
|
|   Main.jsx
|   Nav.jsx
|   NotFound.jsx
|
+---admin
|   +---content
|   |       AdminContent.jsx
|   |
|   +---main
|   |   |   AdminMain.jsx
|   |   |
|   |   \---list
|   |           AdminItemList.jsx
|   |
|   +---orderHistory
|   |       AdminOrderHistory.jsx
|   |
|   \---orderList
|           AdminOrderList.jsx
|
+---detail
|       Content.jsx
|
+---list
|       Item.jsx
|       ItemList.jsx
|
+---login
|       Login.jsx
|
+---order
|       Order.jsx
|       Phone.jsx
|       PostSelector(past).jsx
|       PostSelector.jsx
|       Remittance.jsx
|
+---orderHistory
|       OrderHistory.jsx
|
+---orderList
|       OrderList.jsx
|
\---register
        Register.jsx
```


## Spring Boot JPA 

```
+---dao
|   |   OrderDAO.java
|   |   ProductDAO.java
|   |   UserDAO.java
|   |
|   \---Impl
|           OrderDAOImpl.java
|           ProductDAOImpl.java
|           UserDAOImpl.java
|
+---dto
|       AdminDTO.java
|       ImageDTO.java
|       OrderDetailDTO.java
|       OrderDTO.java
|       ProductColorDTO.java
|       ProductDTO.java
|       UserDTO.java
|
+---entity
|       AdminEntity.java
|       BaseEntity.java
|       ImageEntity.java
|       OrderDetailEntity.java
|       OrderEntity.java
|       ProductColorEntity.java
|       ProductEntity.java
|       UserEntity.java
|
+---handler
|   |   OrderDataHandler.java
|   |   ProductDataHandler.java
|   |   UserDataHandler.java
|   |
|   \---Impl
|           OrderDataHandlerImpl.java
|           ProductDataHandlerImpl.java
|           UserDataHandlerImpl.java
|
+---repository
|       OrderRepository.java
|       ProductRepository.java
|       UserRepository.java
|
\---service
    |   OrderService.java
    |   ProductService.java
    |   UserService.java
    |
    \---Impl
            OrderServiceImpl.java
            ProductServiceImpl.java
            UserServiceImpl.java
```
