# Airbnb_Clone --rc_risingtest_airbnb_B

## 구현

### 페이지

-   메인 페이지
-   회원가입 관련 페이지
-   로그인 페이지
-   호스팅 등록 페이지
-   숙소 리스트 페이지
-   상세 숙소 페이지

## 연결한 API

-   회원 등록 API
-   회원 수정 API
-   회원 삭제 API
-   숙소 리스트 검색 API

## 2022-01-08 진행상황

-   헤더 퍼블리싱
-   뼈대 레이아웃 구성

## 2022-01-09 진행상황

-   헤더 퍼블리싱
-   뼈대 레이아웃 구성
-   footer 퍼블리싱

_헤더 퍼블리싱_

-   logo, category, menu, search bar 퍼블리싱
-   scorll시 header-bar 디자인 바뀌는 부분 구현

## 2022-01-10 진행상황

-   메인 페이지 퍼블리싱

## 2022-01-11 진행상황

-   숙소 검색 화면 퍼블리싱
    -   filter
    -   card

**svg 폴더에 따로 관리**

-   사용법

```javascript
import { ReactComponent as Filter } from "../../assets/ic-houses-filter.svg";

<Filter />;
```

-   svg 태그 안에 style속성이 있으면 컴파일 안됨.

## 2022-01-12 진행상황

-   UserMenuModal publishing
-   _비고: 당직으로 작업을 거의 못함_

## 2022-01-13 진행상황

-   houses page publishing
-   user menu modal publishing

## 2022-01-14 진행상황

-   UserMenuModal publishing
-   Google Map API 연동

## 2022-01-15 진행상황

-   Login & Join Modal publishing

## 2022-01-16 진행상황

-   house-detail page publishing
-   use library `validator` : for validate email

**a href 새 탭에 띄우고 reset.css가 동작하지 않음**

## 2022-01-17 진행상황

-   house-detail page publishing
-   login & join api 연동

**자동 로그인 - localStorage**

```javascript
localStorage.getItem("item");
localStorage.setItem("item");
localStorage.removeItem("item");
```

## 2022-01-18

**feedback**

-   호스팅 페이지
-   개인정보 페이지
-   수정까지
-   API 연결
-   디테일 신경쓰기

**진행상황**

-   login & join 완료

## 2022-01-19

-   tailwind.css
-   Apply JIT mode

## 2022-01-20 진행상황

-   hosting page publishing
-   account-settings page publishing
-   personal-info page publishing

**tailwind 적용 안됨**

-   h-fit, grow 등
-   임시로 style tag로 css 적용
-   Window에서 TAILWIND_MODE is not recognized as an internal or external command error -> cross-env로 해결

## 2022-01-21 진행상황

-   hosting page publishing
-   daum address api 연동
-   toastify 사용
-

## TodoList

-   [O] header
-   [O] footer
-   [O] main
-   [O] house-list
-   [O] login
-   [O] Join
-   [O] house-detail
-   [O] account
-   [O] hosting
