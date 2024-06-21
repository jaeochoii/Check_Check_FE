# 2024 인하대학교 컴퓨터공학 종합 설계 프로젝트 Team 짹짹 <br />[🥉캡스톤 디자인 대회 장려상 수상작]

## 🐣 짹짹(Check Check) - 자기소개서 AI 첨삭 🖍️ 서비스 소개
<img width="729" alt="스크린샷 2024-06-15 오후 12 06 19" src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/839d6b2a-dfd2-4859-8701-1c7a30fcc48d">
<img width="729" alt="스크린샷 2024-06-15 오후 12 05 51" src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/c97327f5-5702-405e-9bb7-3de7c291cc63">
<img width="729" alt="스크린샷 2024-06-15 오후 12 05 28" src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/2feb54e5-8407-4b0d-908f-f798d30e9472">

## ⚙️ 기능 소개
### 🎨로그인 및 회원 관리 설정
![Login Page](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/b1d94d57-5a9c-43e4-97a5-5f8db15e4525)
![#2  개인설정](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/26f3aeac-35d5-4c51-8e4e-45a3f9801829)
![프로필 관리 페이지](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/d793e15f-7fa3-4600-bfd8-effc0598dbe6)
복잡한 로그인 절차보다는 아이디, 비밀번호, 닉네임, 아바타 이미지를 회원 로그인 정보로 받아 DB를 관리하였습니다. 이후에 회원정보 수정에서는 아바타 이미지와 닉네임만 변경 가능하게 하였습니다. 회원 탈퇴 처리도 가능합니다.

### 🍀 메인 자소서 입력 기능
![메모 미입력](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/472baaa9-8ef3-4623-869c-00b2f2d97034)
![메모 입력 후](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/83ae1581-63f2-4947-a516-a9ae087decd7)
![Example](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/643f3452-543c-4422-b8d0-37c3deef36e2)
![Error snackbar](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/97201871-2914-4b80-8de6-5153a5f81b1d)
LeftBar에서는 회사를 추가할 수 있는 기능을 만들었습니다. 팝업 모달창에서 회사명, 회사 직무, 자기소개서 질문과 글자수를 입력하면 LeftBar에 회사명과 관련된 질문을 확인할 수 있습니다. 또한 질문을 새로 추가할수도, 삭제할 수도 있습니다. 해당 질문을 클릭하면 CenterPage에서 본격적인 자기소개서 작성이 가능합니다. 아래에는 글자수를 실시간으로 확인할 수 있는 기능도 추가하였습니다. RightBar에는 회사별로 메모를 작성할 수 있습니다. 현재 놓치고 있는 점이 무엇인지, 어떤 포인트를 잡고 자소서를 작성할 지, 빼먹지 않고 실시간으로 확인이 가능합니다.

### ✅ 첨삭 결과 확인
![첨삭 결과 페이지](https://github.com/jaeochoii/Check_Check_FE/assets/103018984/ced16a97-2346-4bcf-bd64-ecb820c3c321)
회사별로 첨삭 버튼을 클릭하면 AI 분석 결과를 바탕으로 30000개의 자소서 데이터 기반 본인이 작성한 글과 비교가 가능합니다. 합격자와 비교해서 어떤 부분에서 장점이 있는지, 단점이 있는지, 본인이 작성한 자소서를 바탕으로 예상 질문 추출이 가능해지고, 질문이 비슷한 기업을 추천해줍니다.

## 👬 참여 인원
|<img src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/eb4e00bf-2ad6-4bd9-8911-d77b866ecc63" width="100">|<img src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/eb5917be-ca12-4720-8094-3da9e5763c0f" width="100">|<img src="https://github.com/jaeochoii/Check_Check_FE/assets/103018984/5a79736d-ac83-4dcf-82fe-d8abc60f9366" width="100">|
|:---:|:---:|:---:|
|[송현성](https://github.com/thdgustjd1)|[최재오](https://github.com/jaeochoii)|[양원철](https://github.com/Woncheol-AOS)|
|컴퓨터공학과 4|컴퓨터공학과 4|컴퓨터공학과 4|
|BE|FE|Design & DB|

## 🌈 Check Check Commit Convention
- ✨ Feat: A new feature or enhancement
- 🐛 Fix: A bug fix
- 📝 Docs: Documentation changes
- 🎨 Style: Code style changes (formatting, missing semi colons, etc)
- ♻️ Refactor: Code refactoring
- ✅ Test: Adding or modifying tests
- 🚀 Deploy: Deploying stuff
- 📦 Chore: Other changes that don't modify src or test files
- ⚙️ Settings: Changing configuration files
