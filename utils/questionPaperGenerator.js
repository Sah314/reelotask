// questionPaperGenerator.js
const QuestionPaperGenerator = {
    generateQuestionPaper: (totalMarks, difficultyDistribution, questions) => {
      const questionPaper = [];
  
      difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const questionsOfDifficulty = questions.filter(q => q.difficulty === difficulty);
        let marksForDifficulty = Math.round(totalMarks * (percentage / 100));
  
        // Randomly select questions based on the required marks without duplicates
        while (marksForDifficulty > 0 && questionsOfDifficulty.length > 0) {
          const randomIndex = Math.floor(Math.random() * questionsOfDifficulty.length);
          const selectedQuestion = questionsOfDifficulty.splice(randomIndex, 1)[0];
  
          // Check if the question is not already in the question paper
          if (!questionPaper.some(q => q._id === selectedQuestion._id)) {
            // Add the selected question to the question paper
            questionPaper.push(selectedQuestion);
            marksForDifficulty -= selectedQuestion.marks;
          }
        }
      });
  
      return questionPaper;
    }
  };
  
  module.exports = QuestionPaperGenerator;
  