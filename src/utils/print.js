export const generatePrintContent = (learningData, problems) => {
  const content = document.createElement('div');
  content.style.padding = '20px';
  content.style.fontFamily = 'Gowun Dodum, sans-serif';

  // 헤더 추가
  const header = document.createElement('div');
  header.innerHTML = `
    <h1 style="text-align: center; margin-bottom: 20px;">서현이의 학습 기록</h1>
    <div style="text-align: center; margin-bottom: 30px;">
      <p>총 점수: ${learningData.totalScore}점</p>
      <p>연속 학습: ${learningData.streakDays}일</p>
      <p>출력일: ${new Date().toLocaleDateString()}</p>
    </div>
  `;
  content.appendChild(header);

  // 문제 및 답안 기록 추가
  const problemsSection = document.createElement('div');
  problemsSection.innerHTML = `<h2 style="margin-bottom: 15px;">풀이 기록</h2>`;

  Object.entries(learningData.solvedProblems).forEach(([problemId, result]) => {
    const problem = problems.find(p => p.id === problemId);
    if (!problem) return;

    const problemDiv = document.createElement('div');
    problemDiv.style.marginBottom = '20px';
    problemDiv.style.padding = '15px';
    problemDiv.style.border = '1px solid #ddd';
    problemDiv.style.borderRadius = '8px';

    problemDiv.innerHTML = `
      <div style="margin-bottom: 10px;">
        <strong>문제:</strong> ${problem.question}
      </div>
      <div style="margin-bottom: 10px;">
        <strong>정답:</strong> ${problem.correctAnswer}
      </div>
      <div style="margin-bottom: 10px;">
        <strong>결과:</strong> ${result.correct ? '정답' : '오답'}
      </div>
      <div style="color: #666;">
        <strong>설명:</strong> ${problem.explanation}
      </div>
    `;

    problemsSection.appendChild(problemDiv);
  });

  content.appendChild(problemsSection);

  return content;
};

export const printLearningRecord = (learningData, problems) => {
  const printWindow = window.open('', '_blank');
  const content = generatePrintContent(learningData, problems);

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>서현이의 학습 기록</title>
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Gowun Dodum', sans-serif;
            line-height: 1.6;
            color: #333;
          }
          @media print {
            body {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        ${content.outerHTML}
        <script>
          window.onload = function() {
            window.print();
            window.onfocus = function() { window.close(); }
          }
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
}; 