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