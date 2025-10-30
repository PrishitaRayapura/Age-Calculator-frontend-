function calculateAge() {
  const d1 = parseInt(document.getElementById("date").value);
  const m1 = parseInt(document.getElementById("month").value);
  const y1 = parseInt(document.getElementById("year").value);
  const result = document.getElementById("result");

  // Basic validation
  if (!d1 || !m1 || !y1 || d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12) {
    result.innerHTML = "⚠️ Please enter valid date values.";
    return;
  }

  const today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap year
  if (y2 % 4 === 0 && (y2 % 100 !== 0 || y2 % 400 === 0)) {
    monthDays[1] = 29;
  }

  // Borrow days if birth date > current date
  if (d1 > d2) {
    d2 += monthDays[m2 - 2 < 0 ? 11 : m2 - 2];
    m2 -= 1;
  }

  // Borrow months if birth month > current month
  if (m1 > m2) {
    m2 += 12;
    y2 -= 1;
  }

  const d = d2 - d1;
  const m = m2 - m1;
  const y = y2 - y1;

  if (y < 0 || (y === 0 && m < 0) || (y === 0 && m === 0 && d < 0)) {
    result.innerHTML = "⚠️ Please enter a valid past date.";
    return;
  }

  result.innerHTML = `🎉 You are <strong>${y}</strong> years, <strong>${m}</strong> months, and <strong>${d}</strong> days old.`;
}
