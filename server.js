// server.js - Gemini AI backend integration for DermaVision
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Gemini API key not found. Please set GEMINI_API_KEY in your .env file.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Gemini recommendations endpoint
app.post('/api/gemini-recommendations', async (req, res) => {
  try {
    const { skinCondition, confidence } = req.body;
    if (!skinCondition) {
      return res.status(400).json({ error: 'Missing skinCondition' });
    }
    // Compose prompt for Gemini
    const prompt = `You are a professional dermatologist AI. A user has uploaded a skin image and the AI model detected: ${skinCondition} (confidence: ${confidence || 'unknown'}). Provide a personalized, detailed skincare advice and care plan for this condition. Include daily routine, recommended products, and when to see a doctor. Use clear, friendly language.`;
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const recommendations = response.text();
    res.json({ recommendations });
  } catch (err) {
    console.error('Gemini API error:', err);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
});

// Serve static files (frontend)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`DermaVision server running on http://localhost:${PORT}`);
}); 