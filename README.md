# 동적 자기소개 페이지

이 프로젝트는 간단한 동적 웹 페이지입니다. JavaScript를 사용하여 사용자와 상호작용하고 동적인 시각 효과를 제공합니다.

**라이브 페이지:** [https://jjune947.github.io/jjune251120/](https://jjune947.github.io/jjune251120/)

## 기능

*   마우스를 따라 움직이는 동적 배경 그라데이션
*   `안녕하세요!` 텍스트의 색상 변경 애니메이션
*   사용자 이름 입력 및 인사 메시지 출력
*   사용자 MBTI 입력 및 메시지 출력

## 코드

<details>
<summary>HTML (index.html)</summary>

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>동적 결과 페이지</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이름을 입력하고 버튼을 클릭하세요.</p>
    <input type="text" id="nameInput" placeholder="여기에 이름을 입력하세요">
    <button id="submitBtn">확인</button>
    <div id="result"></div>

    <p>MBTI를 입력하고 버튼을 클릭하세요.</p>
    <input type="text" id="mbtiInput" placeholder="여기에 MBTI를 입력하세요">
    <button id="mbtiBtn">확인</button>
    <div id="mbtiResult"></div>

    <script src="script.js"></script>
</body>
</html>
```

</details>

<details>
<summary>CSS (style.css)</summary>

```css
body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #121212; /* Darker background */
    color: #fff; /* White text for better contrast */
}

h1 {
    color: #fff;
}


input[type="text"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 5px;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
}
```

</details>

<details>
<summary>JavaScript (script.js)</summary>

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');
    const body = document.body;
    const greetingH1 = document.querySelector('h1'); // Get the h1 element

    // Add mousemove event listener to the body
    body.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Create a radial gradient that follows the mouse
        body.style.background = `radial-gradient(circle at ${x}px ${y}px, #333 0%, #121212 25%)`;
    });

    submitBtn.addEventListener('click', () => {
        const name = nameInput.value;
        if (name) {
            resultDiv.textContent = `안녕하세요, ${name}님! 만나서 반갑습니다.`;
        } else {
            resultDiv.textContent = '이름을 입력해주세요.';
        }
    });

    nameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            submitBtn.click();
        }
    });

    // New animation for the h1 element
    let colorToggle = true;
    setInterval(() => {
        if (colorToggle) {
            greetingH1.style.color = '#ADD8E6'; // Light Blue
        } else {
            greetingH1.style.color = '#fff'; // White
        }
        colorToggle = !colorToggle;
    }, 1500); // Toggle color every 1.5 seconds

    const mbtiInput = document.getElementById('mbtiInput');
    const mbtiBtn = document.getElementById('mbtiBtn');
    const mbtiResult = document.getElementById('mbtiResult');

    mbtiBtn.addEventListener('click', () => {
        const mbti = mbtiInput.value;
        if (mbti) {
            mbtiResult.textContent = '좋은 MBTI네요';
        } else {
            mbtiResult.textContent = 'MBTI를 입력해주세요.';
        }
    });

    mbtiInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            mbtiBtn.click();
        }
    });
});
```

</details>
