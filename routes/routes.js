
const express = require('express');
const router = express.Router();
const ques = require('../models/question');
const QuestionPaperGenerator = require('../utils/questionPaperGenerator');

router.post('/addquestion', async (req, res) => {
  try {
    const { question, subject, topic, difficulty, marks } = req.body;
    const newQuestion = await ques.create({
      question: question,
      subject: subject,
      topic: topic,
      difficulty: difficulty,
      marks: marks
    });
    res.json({ question: newQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getquestionpaper', async (req, res) => {
  try {
    const totalMarks = 100;
    const difficultyDistribution = [
      { difficulty: 'Easy', percentage: 20 },
      { difficulty: 'Medium', percentage: 50 },
      { difficulty: 'Hard', percentage: 30 },
    ];

    const questions = await ques.find({});
    const generatedQuestionPaper = QuestionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution, questions);

    res.json({ questionPaper: generatedQuestionPaper });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
