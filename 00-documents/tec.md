# 서현이와 함께 떠나는 수학나라 여행

## 개발 기술 스택
- **Frontend Framework**: Remix
- **Styling**: Tailwind CSS
- **Font**: Gowun Dodum
- **Icons & Animations**: Lottie Files, FontAwesome
- **Email Service**: Nodemailer + Gmail SMTP
- **Database**: local storage
- **Hosting**: Vercel

## 주요 기술 구성
1. **학습 콘텐츠 관리**
   - local storage에 3학년/4학년 학습 데이터를 저장.
   - 학습 데이터는 JSON 포맷으로 구성.

2. **랜덤 문제 출제**
   - JavaScript `Math.random()` 사용.
   - 카테고리별 문제 풀에서 랜덤으로 문제를 선택.

3. **UI/UX**
   - Tailwind CSS로 레이아웃 구성.
   - 애니메이션 효과는 css로 구현.

4. **이메일 송신**
   - Nodemailer를 활용해 서현이가 할아버지에게 이메일 송신 가능.

5. **가족 응원 메시지**
   - local storage를 사용하여 응원 메시지 저장 및 조회.
   - 메시지 입력 시 실시간 업데이트.

---

## 디렉토리 구조
src/
components/
MathProblems.jsx
Navbar.jsx
Footer.jsx
GrandfatherMessage.jsx
pages/
Home.jsx
Learning.jsx
Messages.jsx
utils/
emailService.js
randomProblem.js
styles/
global.css