// JavaScript (script.js)
let user = "";
let progress = 0;

function registerUser() {
  user = document.getElementById("username").value;
  if (user) {
    document.getElementById("welcome").innerText = `Welcome, ${user}!`;
    updateProgress(25);
  }
}


function uploadCourse() {
  const title = document.getElementById("courseTitle").value;
  const desc = document.getElementById("courseDesc").value;
  if (title && desc) {
    const li = document.createElement("li");
    li.innerText = `${title} - ${desc}`;
    document.getElementById("courseList").appendChild(li);
    updateProgress(25);
  }
}

const quizQuestions = [
  { q: "What does HTML stand for?", a: "a", options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Links"] },
  { q: "What does CSS stand for?", a: "a", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Syntax"] },
  { q: "What does JS stand for?", a: "b", options: ["Java Syntax", "JavaScript", "Jumbo Style"] },
  { q: "Which HTML tag is used to insert an image?", a: "a", options: ["<img>", "<image>", "<pic>"] },
  { q: "How do you apply a background color in CSS?", a: "c", options: ["color: background;", "bg-color:", "background-color:"] },
  { q: "How do you declare a variable in JS?", a: "a", options: ["let x = 5;", "int x = 5;", "variable x = 5;"] },
  { q: "Which company developed JavaScript?", a: "b", options: ["Microsoft", "Netscape", "Google"] },
  { q: "How do you create a function in JS?", a: "a", options: ["function myFunc()", "create myFunc()", "func = myFunc()"] },
  { q: "Which CSS property controls text size?", a: "b", options: ["text-size", "font-size", "size"] },
  { q: "How do you write comments in HTML?", a: "a", options: ["<!-- comment -->", "// comment", "/* comment */"] },
];

function loadQuiz() {
  const container = document.getElementById("quizContainer");
  quizQuestions.forEach((question, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${index + 1}. ${question.q}</p>
      <select id="quizAnswer${index}">
        <option value="">Select an answer</option>
        <option value="a">${question.options[0]}</option>
        <option value="b">${question.options[1]}</option>
        <option value="c">${question.options[2]}</option>
      </select>`;
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizQuestions.forEach((q, i) => {
    const selected = document.getElementById(`quizAnswer${i}`).value;
    if (selected === q.a) score++;
  });
  const result = document.getElementById("quizResult");
  result.innerText = `You got ${score} out of ${quizQuestions.length} correct.`;
  updateProgress(25);
}

function updateProgress(increase) {
  progress += increase;
  if (progress > 100) progress = 100;
  document.getElementById("progress").style.width = progress + "%";
  document.getElementById("progressText").innerText = `${progress}% Completed`;
}
function submitFeedback() {
  const fb = document.getElementById("feedback").value;
  if (fb) {
    alert("Thanks for your feedback!");
    updateProgress(25);
  }
 if (progress === 100) {
   alert("Congratulations! You've completed all tasks!");
}

}


window.onload = loadQuiz;
