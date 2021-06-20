<h1>Seolleung Beer</h1>

# [선릉맥주](https://youtu.be/iNovavF_PoI)
# 프로젝트 소개
## 프로젝트 요약
- **제주맥주**를 모티브로 하여 '선릉맥주'라는 가상의 브랜드와, 가상의 상품 기획을 더해 cloning.
- **진행 기간**: 2021.06.04 ~ 06.18
- **기획 포인트**
1. '선릉맥주' 라는 가상의 브랜드 아래, 선릉과 어울리는 각종 술과 음식,굿즈를 판매하는 커머스 서비스
2. '선릉맥주'란?
여행, 휴식과는 거리가 먼 서울, 그 중에서도 가장 치열하고 바쁜 도심 선릉.
그러나 도심 속 지친 직장인들에게도 여행이, 그리고 '당장의' 여행이 필요하다.
선릉 속에서 언제 어느때든 잠시의 여행을 즐길 수 있게 도와주는 상품들이 있다면?
선릉에서 개발 공부에 지쳐가는 우리에게 여행지의 맥주, 일상을 잊게 하는 굿즈, 맛있는 음식이 있다면 얼마나 좋을까?
이런 소원에서 출발하여, 지금 우리가 갖고 싶은 상품들을 판매하는 가상의 커머스 사이트를 제작하였습니다.
## 팀원 소개
Front - 김건우, 백진수
Back - 김경천,김정연,황복실
## 메인 서비스
1. 상품을 카테고리별로 골라 볼 수 있습니다.
2. 상품을 장바구니에 담을 수 있습니다.
3. 장바구니에서 담은 상품을 조회하고, 수량을 변경하고, 삭제할 수 있습니다.
3. 상품을 바로 주문하거나, 장바구니에 담은 상품을 주문할 수 있습니다.
# 적용 기술 및 구현 기능
## 기술 스택
- Front-End : React, React Router, Sass, Dompurify, React Daum Postcode, JavaScript, CRA
- Back-End : Python, Django, My SQL
- Communication Tool : Trello, Git, GitHub, Slack
## 구현 기능 상세
### 로그인 페이지(백진수)
**- 설명**

- 사용자들에게 맥주의 이미지를 좀 더 시각적으로 나타내고 싶어 캔버스를 이용하여, 키를 누를 때마다 맥주가 흔들거리는 듯한 애니메이션을 만들어 보았습니다.

**-  기능** 

- 아이디와 비밀번호가 일치한다면 로그인 후 메인페이지로 이동
- 키프레스에 반응하는 애니메이션
### 회원가입 페이지 (백진수)
**- 설명**

- 사용자들이 각 항목의 형식이 올바른 지 실시간으로 확인할 수 있도록 만들어 보았습니다.

- **기능**

- 파일리더 객체를 통해 이미지 업로드 후 이미지 미리보기 기능 제공
- 각 항목의 유효성 검사
- 이메일과 핸드폰번호 중복체크
- 모든 항목이 올바르면 가입 버튼 클릭 시 회원가입 완료 후 로그인 페이지로 이동
### 상품리스트 페이지 (백진수)
**- 설명**

- 기존의 사이트에 없던 카테고리 필터링 기능을 백엔드와 협의하여 추가했고, 그에 맞추어 새로운 디자인으로 페이지를 다시 만들었습니다. 화면의 크기에 따라 3개, 2개, 1개로 보일 수 있도록 만들었습니다.

**- 기능**

- 카테고리 클릭 시 카테고리 별 아이템 불러옴
- 더 불러올 아이템이 있으면 초록색 버튼, 불러올 아이템이 없다면 회색버튼으로 바뀌고 요청 막음
- 상품카드 클릭 시 상품 상세 페이지로 이동
### 장바구니 페이지 (백진수)
**- 설명**

- 생각보다 들어가 있는 기능들이 많아, 기존의 장바구니 기능을 동일하게 구현해 보았습니다.

**- 기능**

- 주문버튼 클릭 시 주문페이지로 이동
- 삭제버튼 클릭 시 장바구니 아이템 삭제
- 체크박스 선택 후 선택삭제 버튼 클릭 시 선택한 아이템들 삭제
- 체크박스 선택 후 주문 버튼 클릭 시 선택한 아이템들의 주문페이지로 이동
- 장바구니 아이템 수량 변경
- 계속 쇼핑하기 버튼 클릭 시 상품 리스트 페이지로 이동
- 체크박스 선택 후 주문 버튼 클릭 시 선택한 아이템들의 주문페이지로 이동
- 장바구니 각 리스트의 주문 버튼 클릭 시 단일 항목의 주문페이지로 이동
- 장바구니에 담긴 총 가격 표시


### 메인 페이지 (김건우)

**- 기능**

- 캐러셀 기능
 
### 상품 상세 페이지 (김건우)

**- 기능**

- 상품 아이디에 따른 상품을 조회
- 상품 구매하기를 통한 결제창 이동
- 상품 장바구니 등록
- 로그인 여부에 따른 팝업창 변화
 
### 결제 페이지 (김건우)

**- 기능**

- 입력값에 따른 체크로직
- 주소 API를 통한 주소 조회

# Reference
1. 이 프로젝트는 [제주맥주]https://jejubeer.co.kr/를 참조하여 학습 목적으로 만들었습니다.
2. !!개발 클론이 아닌 '기획 클론'
선릉맥주 프로젝트는 제주맥주 클론 프로젝트이지만, 백지 상태에서 구현되었습니다.
개발자의 역할은 기획이 아닌, 기획 의도를 현실로 바꾸는, 기획의 '구현'이라 생각합니다.
따라서, 기획 과정을 건너 뛰고 구현에 집중하기 위해 제주맥주라는 서비스를 참고한 것일 뿐,
프로젝트의 모든 기능은, 실제 서비스 개발과정과 마찬가지로, 백지 상태에서 구현되었음을 밝힙니다.
3. 프로젝트에 사용한 모든 이미지와 영상은 저작권에 문제가 없는 컨텐츠를 사용하여 만들었습니다.


