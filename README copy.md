# DermaVision - AI-Powered Skincare Analysis

A web application that uses AI to analyze skin conditions and provide personalized skincare recommendations powered by Google's Gemini AI.

## Features

- 🖼️ **Skin Analysis**: Upload images for AI-powered skin condition detection
- 🤖 **Gemini AI Integration**: Secure backend API for personalized skincare recommendations
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🔒 **Secure API**: Backend server keeps your API keys safe

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Gemini AI API key from Google AI Studio

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API key" 
4. Copy your API key

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

1. Create a `.env` file in the root directory:
```bash
cp env.example .env
```

2. Edit the `.env` file and add your Gemini API key:
```
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=3000
```

### 4. Start the Server

```bash
# For development (with auto-restart)
npm run dev

# For production
npm start
```

The server will start on `http://localhost:3000`

### 5. Access the Application

Open your browser and go to `http://localhost:3000`

## How It Works

1. **Upload Image**: Users upload a skin image on the skin analysis page
2. **AI Analysis**: The system analyzes the image and detects skin conditions
3. **Secure API Call**: The frontend securely calls the backend API
4. **Gemini Recommendations**: The backend uses Gemini AI to generate personalized skincare advice
5. **Display Results**: Users see both basic predictions and detailed AI recommendations

## API Endpoints

- `POST /api/gemini-recommendations` - Get personalized skincare recommendations
- `GET /api/health` - Health check endpoint

## Security Features

- ✅ API keys stored securely in environment variables
- ✅ Backend handles all Gemini API calls
- ✅ CORS enabled for cross-origin requests
- ✅ Error handling and validation

## File Structure

```
DermaVision-1/
├── server.js                 # Backend server
├── package.json             # Node.js dependencies
├── .env                     # Environment variables (create this)
├── env.example             # Example environment file
├── index.html              # Home page
├── skin-analysis.html      # Image upload and analysis
├── professional-guidance.html # Results and AI recommendations
├── how-it-works.html       # How it works page
├── about-us.html           # About us page
├── styles.css              # CSS styles
└── README.md               # This file
```

## Troubleshooting

### Common Issues

1. **"API key not found" error**
   - Make sure you've created the `.env` file
   - Verify your API key is correct
   - Restart the server after adding the API key

2. **"Failed to generate recommendations" error**
   - Check your internet connection
   - Verify your Gemini API key is valid
   - Check the server console for detailed error messages

3. **CORS errors**
   - The server includes CORS middleware
   - Make sure you're accessing via `http://localhost:3000`

### Getting Help

If you encounter issues:
1. Check the server console for error messages
2. Verify your API key is working in Google AI Studio
3. Ensure all dependencies are installed correctly

## License

MIT License - feel free to use and modify as needed.