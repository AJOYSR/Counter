function setInitialValue() {
  document.getElementById("input_marks").value = 0;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("input_marks").value);

  if (marks >= 80 && marks <= 100) {
    document.getElementById("result").innerText = "Result is = A+";
  }
  if (marks >= 70 && marks <= 79) {
    document.getElementById("result").innerText = "Result is = A";
  }
  if (marks >= 60 && marks <= 69) {
    document.getElementById("result").innerText = "Result is = A-";
  }
  if (marks >= 50 && marks <= 59) {
    document.getElementById("result").innerText = "Result is = B";
  }
  if (marks >= 40 && marks <= 49) {
    document.getElementById("result").innerText = "Result is = C";
  }
  if (marks >= 0 && marks <= 39) {
    document.getElementById("result").innerText = "Result is = F";
  }
}

setInitialValue();
