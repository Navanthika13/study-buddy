const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname)));

function sanitizeText(text) {
  return String(text || '').trim();
}

function extractSentences(text) {
  return (text.match(/[^.!?]+[.!?]+/g) || []).map((sentence) => sentence.trim()).filter(Boolean);
}

function generateFlashcardsFromNotes(notes, count) {
  const sentences = extractSentences(notes);
  const keyPoints = sentences.filter((sentence) => sentence.length > 20).slice(0, count);
  return keyPoints.map((point) => {
    const parts = point.split(/[,;]/);
    const question = parts[0].trim();
    const answer = parts.length > 1 ? parts.slice(1).join(', ').trim() : point;
    return {
      question: `What is meant by: ${question}?`,
      answer: answer || 'Refer to your notes for a fuller explanation.'
    };
  });
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateQuizFromNotes(notes) {
  const sentences = extractSentences(notes);
  const questions = [];
  for (let i = 0; i < Math.min(5, sentences.length); i += 1) {
    const sentence = sentences[i];
    const words = sentence.split(/\s+/).filter((word) => word.length > 4);
    const options = shuffle([
      sentence.substring(0, 60),
      'This is not covered in the material.',
      'A common misunderstanding about this topic.',
      words.slice(0, 3).join(' ')
    ]);
    questions.push({
      question: `According to your notes, what does this describe: ${sentence.substring(0, 45)}?`,
      options,
      correctAnswer: options.indexOf(sentence.substring(0, 60))
    });
  }
  return questions;
}

function generateDoubtResponse(notes, question, subject) {
  const normalizedQuestion = question.toLowerCase();
  const sentences = extractSentences(notes);
  const keyWords = normalizedQuestion.split(/\s+/).filter((w) => w.length > 3);
  const relevant = sentences.find((sentence) => keyWords.some((word) => sentence.toLowerCase().includes(word)));

  if (relevant) {
    return `In ${subject || 'your material'}, this passage is most relevant: "${relevant}". In simpler terms, it means: ${simplifySentence(relevant)}.`;
  }

  return `I couldn't find a direct match in your notes for "${question}". Try asking again using the most important concept or keywords from your subject.`;
}

function simplifySentence(sentence) {
  const normalized = sentence.replace(/\s+/g, ' ').trim();
  if (normalized.length <= 100) {
    return normalized;
  }
  return `${normalized.substring(0, 100)}...`; 
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pro.html'));
});

app.post('/api/flashcards', (req, res) => {
  const notes = sanitizeText(req.body.notes);
  const count = Number(req.body.count) || 10;
  if (!notes || notes.length < 100) {
    return res.status(400).json({ error: 'Please provide at least 100 characters of study notes.' });
  }
  const flashcards = generateFlashcardsFromNotes(notes, count);
  res.json({ flashcards });
});

app.post('/api/quiz', (req, res) => {
  const notes = sanitizeText(req.body.notes);
  if (!notes || notes.length < 100) {
    return res.status(400).json({ error: 'Please provide at least 100 characters of study notes.' });
  }
  const quiz = generateQuizFromNotes(notes);
  res.json({ quiz });
});

app.post('/api/doubt', (req, res) => {
  const notes = sanitizeText(req.body.notes);
  const question = sanitizeText(req.body.question);
  const subject = sanitizeText(req.body.subject);

  if (!notes || notes.length < 100) {
    return res.status(400).json({ error: 'Please provide at least 100 characters of study notes.' });
  }
  if (!question) {
    return res.status(400).json({ error: 'Please provide a doubt question.' });
  }

  const answer = generateDoubtResponse(notes, question, subject);
  res.json({ answer });
});

app.listen(port, () => {
  console.log(`AI Study Buddy backend running at http://localhost:${port}`);
});
