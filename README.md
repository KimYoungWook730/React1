<h1 align="center">202230339 김영욱</h1>

---

## 📅 10주차 (5월 6일)
# 10주차 학습 기록: children props와 이벤트 핸들러

---

## 1. children props란

컴포넌트 태그 사이에 작성한 내용을 `children`이라는 이름의 props로 전달받을 수 있다.

- `<Button>텍스트</Button>` 형태로 사용
- 태그 사이 내용이 자동으로 children에 담김
- 문자열뿐만 아니라 JSX도 전달 가능

```jsx
export default function Button({ label, children }) {
  function handleClick() {
    alert(label);
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
```

---

## 2. children props의 특징

children은 명시적으로 props 목록에 선언하지 않아도 자동으로 전달된다.

```jsx
<Button label="저장 성공">
  저장하기
</Button>
```

- 태그 사이의 내용을 자유롭게 구성 가능
- 컴포넌트 재사용성이 크게 향상됨

---

## 3. 이벤트 핸들러를 props로 전달

이벤트 처리 함수를 props 형태로 넘겨주면, 동일한 컴포넌트에 각각 다른 동작을 부여할 수 있다.

```jsx
<button onClick={() => alert('버튼 클릭됨')}>
  Click
</button>
```

---

## 4. 이벤트 처리 구조 분리

- 렌더링 담당 → Button 컴포넌트
- 이벤트 로직 → 부모 컴포넌트에서 정의 후 전달
- 역할이 분리되어 유지보수가 쉬워짐

---

## 5. 이벤트 핸들러 작성 시 주의사항

이벤트 핸들러에 함수를 그대로 호출하면 렌더링 시점에 즉시 실행된다.

```jsx
// 잘못된 방식 - 렌더링되자마자 실행됨
<button onClick={alert('클릭')}>
```

```jsx
// 올바른 방식 - 클릭 시에만 실행됨
<button onClick={() => alert('클릭')}>
```

---

## 핵심 정리

- children props는 태그 사이 내용을 자동으로 전달한다
- 이벤트 핸들러는 반드시 함수 형태로 전달해야 한다
- props를 통한 이벤트 전달로 컴포넌트 재사용성을 높일 수 있다
- 렌더링 역할과 이벤트 로직을 분리하면 구조가 명확해진다

---

## 한줄 정리

children props와 이벤트 핸들러 전달 방식을 활용하면 유연하고 재사용 가능한 컴포넌트를 만들 수 있다.

---

## 📅 9주차 (4월 29일)
# 9주차 학습 기록: CSS 스타일링 방법과 이벤트 처리

---

## 1. 일반 CSS 파일 사용

CSS 파일을 별도로 만들고 컴포넌트에서 import하여 적용하는 방식이다.

- HTML과 동일한 CSS 문법 사용
- JSX에서는 `class` 대신 `className` 사용
- 전역 스코프이므로 클래스명 충돌 가능성 있음

```css
/* button.css */
.btn {
  background-color: blue;
  color: white;
  padding: 8px 16px;
}
```

```jsx
import './button.css';

function Button() {
  return <button className="btn">Click</button>;
}
```

---

## 2. 인라인 스타일 적용

JSX 내부에서 직접 스타일 객체를 작성하는 방식이다.

- JavaScript 객체 형태로 작성
- 속성명은 camelCase 사용 (e.g. `backgroundColor`)
- 동적 스타일 적용에 유용하지만 코드가 길어질 수 있음

```jsx
function Card() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '16px', borderRadius: '8px' }}>
      카드 내용
    </div>
  );
}
```

---

## 3. 이벤트 핸들러 기본 사용

React에서 이벤트는 JSX 속성 형태로 연결한다.

- 이벤트 이름은 camelCase 사용 (onClick, onChange 등)
- 함수 참조 또는 화살표 함수로 전달

```jsx
<button onClick={() => alert('클릭되었습니다!')}>
  Click
</button>
```

> **주의**: `onClick={alert('click')}` 처럼 직접 호출하면 렌더링 시 즉시 실행됨

---

## 4. 이벤트 처리 흐름

- 클릭, 입력, hover 등 다양한 사용자 동작 처리 가능
- 사용자 정의 컴포넌트에서도 이벤트 props 전달 가능

---

## 5. CSS Module

CSS Module은 클래스명 충돌 문제를 해결하기 위한 방법이다.

- 파일명: `컴포넌트명.module.css`
- import 시 객체로 받아서 사용
- 클래스 이름이 자동으로 고유하게 변환됨 (로컬 스코프)

```css
/* NavBar.module.css */
.container {
  padding: 12px;
  background-color: #eee;
}

.item {
  margin-right: 8px;
}
```

```jsx
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <button className={styles.item}>메뉴1</button>
      <button className={styles.item}>메뉴2</button>
    </nav>
  );
}
```

---

## 6. 다중 클래스 및 조건부 스타일

```jsx
// 여러 클래스 동시 적용
<div className={`${styles.box} ${styles.active}`} />

// 조건에 따라 클래스 적용
<div className={`${styles.box} ${isActive ? styles.active : ''}`} />
```

---

## 핵심 정리

- CSS 적용 방식: 일반 CSS / 인라인 스타일 / CSS Module
- JSX에서는 `className` 사용
- 인라인 스타일은 객체 형태, 속성은 camelCase
- 이벤트 핸들러는 함수 형태로 전달해야 함
- CSS Module로 스타일 충돌 방지 가능

---

## 한줄 정리

React의 다양한 스타일링 방법과 이벤트 처리 방식을 이해하고, CSS Module을 통해 스타일을 구조적으로 관리하는 방법을 학습하였다.

---

## 📅 7주차 (4월 15일)
# 7주차 학습 기록: 리스트 렌더링과 순수 함수

---

## 1. 배열 데이터를 활용한 리스트 렌더링

배열로 관리되는 데이터를 화면에 반복 출력하는 방법을 학습하였다.

- `filter()`로 조건에 맞는 항목만 추출
- `map()`으로 각 항목을 JSX 요소로 변환

```jsx
const heroes = [
  { id: 1, name: "스파이더맨", realName: "피터 파커" },
  { id: 2, name: "아이언맨", realName: "토니 스타크" },
  { id: 3, name: "헐크", realName: "로버트 브루스 배너" },
];

const list = heroes
  .filter(hero => hero.name.includes("맨"))
  .map(hero => <li key={hero.id}>{hero.name}</li>);
```

---

## 2. 화살표 함수와 return

화살표 함수에서 `{}`를 사용하면 반드시 `return`이 필요하다.

```jsx
// {} 없이 사용 - return 생략 가능
arr.map(item => <li>{item}</li>);

// {} 사용 시 - return 필수
arr.map(item => {
  return <li>{item}</li>;
});
```

---

## 3. key prop의 역할

리스트 렌더링 시 각 항목에 `key`를 지정해야 React가 변경 사항을 효율적으로 추적할 수 있다.

- 고유한 값(id 등)을 사용하는 것이 원칙
- 배열 인덱스는 순서 변경 시 문제가 생길 수 있어 지양

```jsx
heroes.map(hero => <li key={hero.id}>{hero.name}</li>)
```

---

## 4. Fragment와 key

여러 요소를 반환할 때 Fragment(`<>...</>`)를 사용하지만, key가 필요한 경우 `<Fragment>`를 직접 사용해야 한다.

```jsx
import { Fragment } from 'react';

heroes.map(hero => (
  <Fragment key={hero.id}>
    <dt>{hero.name}</dt>
    <dd>{hero.realName}</dd>
  </Fragment>
))
```

---

## 5. 순수 함수 원칙

컴포넌트는 외부 상태를 변경하지 않는 순수 함수로 작성해야 한다.

```jsx
// 잘못된 방식 - 외부 변수 직접 변경
let count = 0;
count = count + 1; // side effect 발생

// 올바른 방식 - props로 전달받아 사용
function Counter({ count }) {
  return <p>현재 값: {count}</p>;
}
```

---

## 핵심 정리

- 배열 렌더링은 filter + map 조합을 자주 사용
- map 사용 시 key prop은 필수
- 화살표 함수에서 `{}`를 사용하면 return 필요
- 컴포넌트는 순수 함수로 유지해야 예측 가능한 동작이 보장됨

---

## 한줄 정리

배열 데이터 렌더링 방법과 key의 역할, 그리고 순수 함수 원칙을 통해 안정적인 컴포넌트 구조를 이해하였다.

---

## 📅 6주차 (4월 8일)
# 6주차 학습 기록: 조건부 렌더링과 리스트 렌더링

---

## 1. 조건부 렌더링이란

컴포넌트가 특정 조건에 따라 다른 UI를 출력해야 할 때 사용한다. React에서는 JavaScript의 조건 문법을 그대로 활용할 수 있다.

---

## 2. if문을 이용한 조건부 렌더링

```jsx
function Item({ name, isDone }) {
  if (isDone) {
    return <li>{name} ✅</li>;
  }
  return <li>{name}</li>;
}
```

---

## 3. 삼항 연산자 (? :)

조건에 따라 두 가지 JSX 중 하나를 선택할 때 사용한다.

```jsx
function Item({ name, isDone }) {
  return (
    <li>
      {isDone ? `${name} ✅` : name}
    </li>
  );
}
```

---

## 4. 논리 AND 연산자 (&&)

조건이 참일 때만 JSX를 렌더링하고 싶을 때 사용한다.

```jsx
function Item({ name, isDone }) {
  return (
    <li>
      {name} {isDone && '✅'}
    </li>
  );
}
```

- 단순 표시/숨김 → `&&`
- 두 가지 내용 중 선택 → `? :`
- JSX 내부에서는 if문 직접 사용 불가

---

## 5. 리스트 렌더링 기초

배열 데이터를 `map()`으로 JSX로 변환하여 렌더링한다.

```jsx
const heroes = ["스파이더맨", "아이언맨", "배트맨"];

const list = heroes.map((hero, index) => (
  <li key={index}>{hero}</li>
));

return <ul>{list}</ul>;
```

---

## 핵심 정리

- JSX 내부에서는 if문 대신 삼항 연산자나 && 사용
- 단순 표시 여부 → `&&`, 두 결과 중 선택 → `? :`
- 리스트 렌더링은 `map()` 활용
- key는 반드시 고유한 값으로 지정

---

## 한줄 정리

React의 조건부 렌더링 문법과 배열 기반 리스트 렌더링 방법을 학습하였다.

---

## 📅 5주차 (4월 1일)
# 5주차 학습 기록: JSX 문법과 Props

---

## 1. JSX 마크업 기본 개념

JSX는 JavaScript 안에서 HTML처럼 UI를 작성할 수 있는 문법 확장이다.

- **태그(Tag)**: UI 구성 요소를 표기하는 기호 (예: `<div>`, `<p>`)
- **엘리먼트(Element)**: 여는 태그 + 내용 + 닫는 태그의 전체 단위
- **어트리뷰트(Attribute)**: 태그에 추가 정보를 부여하는 속성

```jsx
export default function Greeting() {
  const subject = "React";

  function getToday() {
    return new Date().toLocaleDateString("ko-KR");
  }

  return (
    <>
      <h1>안녕하세요, {subject}!</h1>
      <p>오늘 날짜: {getToday()}</p>
    </>
  );
}
```

---

## 2. Props 전달 구조

부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법이다.

- 단방향 데이터 흐름 (부모 → 자식)
- 자식은 props를 읽기 전용으로만 사용 가능
- 객체 형태로 전달됨

```jsx
// 부모
function App() {
  return <Profile name="홍길동" age={25} />;
}

// 자식
function Profile({ name, age }) {
  return <p>{name} ({age}세)</p>;
}
```

---

## 3. Props 기본값 설정

props가 전달되지 않았을 때를 대비해 기본값을 설정할 수 있다.

```jsx
function Avatar({ size = 50, src }) {
  return <img width={size} src={src} />;
}
```

---

## 4. Spread 문법으로 Props 전달

객체를 컴포넌트에 전달할 때 Spread 문법(`...`)을 사용하면 코드가 간결해진다.

```jsx
const user = { name: "홍길동", age: 25, role: "admin" };

// 일반 방식
<Profile name={user.name} age={user.age} role={user.role} />

// Spread 방식
<Profile {...user} />
```

---

## 5. 구조 분해 할당 활용

props를 받을 때 구조 분해를 사용하면 코드가 간결해진다.

```jsx
// props.name, props.age 대신
function Card({ name, age }) {
  return <p>{name}: {age}세</p>;
}
```

---

## 핵심 정리

- Props는 부모 → 자식 단방향으로 전달된다
- 구조 분해를 활용하면 코드 가독성이 높아진다
- Spread 문법으로 여러 props를 한 번에 전달 가능
- 기본값 설정으로 컴포넌트 안정성 확보 가능

---

## 한줄 정리

Props 전달 방식과 Spread 문법, 구조 분해 할당을 통해 효율적이고 재사용 가능한 컴포넌트 구조를 학습하였다.

---

## 📅 4주차 (3월 25일)
# 4주차 학습 기록: React 개발 환경 구성과 컴포넌트 기초

---

## 1. Vite와 컴파일러 변화

최근 Vite에서 SWC 지원이 종료되고 Oxc 컴파일러가 도입되었다.

- **SWC**: Rust 기반 고속 컴파일러, Babel 대체 목적 (2026.03 지원 종료)
- **Oxc**: ESLint, Prettier, TypeScript 기능까지 통합하는 차세대 도구

```bash
npm create vite@latest my-app -- --template react
```

---

## 2. 컴포넌트 내보내기 방식

| 방식 | 문법 | 특징 |
|------|------|------|
| Default Export | `export default function A()` | 파일당 1개, 이름 변경 가능 |
| Named Export | `export function A()` | 여러 개 가능, 이름 고정 |

Named Export는 협업 시 이름 혼동이 적고 트리 쉐이킹에 유리하다.

---

## 3. 컴포넌트 구조 설계 원칙

- 기능별로 파일 분리 (`/components` 디렉토리 활용)
- 컴포넌트 내부에 또 다른 컴포넌트를 선언하지 않음
- 컴포넌트명은 PascalCase 사용

```jsx
// Profile.jsx
export default function Profile() {
  return <img src="https://example.com/photo.jpg" alt="프로필" />;
}

// App.jsx
import Profile from './Profile';

export default function App() {
  return <Profile />;
}
```

---

## 4. JSX 핵심 규칙

- 반드시 하나의 부모 요소로 감싸야 함 (Fragment 사용 가능)
- 모든 태그는 닫아야 함 (`<img />`)
- 속성명은 camelCase 사용 (`className`, `onClick`)
- JavaScript 표현식은 `{}`로 감싸기

---

## 5. React 렌더링 흐름

컴포넌트 → App.jsx → main.jsx → index.html 순서로 렌더링된다.

- 대문자로 시작 = 컴포넌트
- 소문자로 시작 = HTML 태그

---

## 핵심 정리

- Vite는 Oxc 기반으로 발전 중
- Named Export가 협업에 유리
- 컴포넌트는 PascalCase, JSX 속성은 camelCase
- React는 컴포넌트 트리 구조로 UI를 관리

---

## 한줄 정리

React 개발 환경 구성 방법과 컴포넌트 기본 개념, JSX 문법 규칙을 학습하였다.

---

