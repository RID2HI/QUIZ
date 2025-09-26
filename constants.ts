import { Question } from './types';

export const APP_TITLE = 'KBC ON DAY 3';

export const NUMBER_OF_QUESTIONS = 20;

export const ACCESS_CODE = 'GIVEAWAY';
export const LEADERBOARD_KEY = 'quizLeaderboard';
export const JOINED_USERS_KEY = 'quizJoinedUsers';


export const allQuestions: Question[] = [
  {
    question: "What is the term for an AI generating plausible-sounding but incorrect or fabricated information?",
    options: ["Overfitting", "Bias Drift", "Hallucination", "Prompt Injection"],
    correctAnswer: "Hallucination",
    category: "Day 1: Foundations"
  },
  {
    question: "Which AI model type is specifically designed to understand and generate human language?",
    options: ["CNN", "GAN", "Large Language Model (LLM)", "RLM"],
    correctAnswer: "Large Language Model (LLM)",
    category: "Day 1: Foundations"
  },
  {
    question: "Which common public tool is a foundational example of a text-to-text generative AI?",
    options: ["Midjourney", "Adobe Firefly", "ChatGPT", "Botpress"],
    correctAnswer: "ChatGPT",
    category: "Day 1: Foundations"
  },
  {
    question: "What is the most common input format for DALL·E, Midjourney, or Adobe Firefly?",
    options: ["Uploading a sketch", "Providing a source image", "A descriptive text prompt", "A video file"],
    correctAnswer: "A descriptive text prompt",
    category: "Day 1: Foundations"
  },
  {
    question: "When structuring a prompt, defining the AI’s Persona (e.g., \"Act as an expert CA\") is primarily intended to:",
    options: ["Shorten the response time", "Bypass all safety filters", "Improve the relevance and tone of the output", "Train the model on new data"],
    correctAnswer: "Improve the relevance and tone of the output",
    category: "Day 1: Foundations"
  },
  {
    question: "The core difference between Gemini and a standard search engine is:",
    options: ["Search engines can handle code, Gemini cannot", "Gemini can only process images", "Gemini generates original, conversational text; search engines retrieve existing links/pages", "Search engines are exclusively text-based"],
    correctAnswer: "Gemini generates original, conversational text; search engines retrieve existing links/pages",
    category: "Day 1: Foundations"
  },
  {
    question: "The concept of Token in an LLM primarily refers to:",
    options: ["A security key", "A type of currency", "A fundamental unit of text (word, part of a word, or character)", "A server instance"],
    correctAnswer: "A fundamental unit of text (word, part of a word, or character)",
    category: "Day 1: Foundations"
  },
  {
    question: "Which AI concept describes the potential for historical data patterns to lead to unfair or discriminatory output?",
    options: ["Hallucination", "Tokenization", "Algorithmic Bias", "Overfitting"],
    correctAnswer: "Algorithmic Bias",
    category: "Day 1: Foundations"
  },
  {
    question: "Which prompt element tells the AI the required format for the final output (e.g., \"in a bulleted list\")?",
    options: ["Context", "Persona", "Format/Constraint", "Instruction"],
    correctAnswer: "Format/Constraint",
    category: "Day 1: Foundations"
  },
  {
    question: "Which Day-1 tool is best for converting text into an expressive human-like voice?",
    options: ["Rytr.me", "CA GPT", "Text-to-Speech (TTS) Generator", "Llamacoder"],
    correctAnswer: "Text-to-Speech (TTS) Generator",
    category: "Day 1: Foundations"
  },
  {
    question: "Which feature in a traditional presentation app is most comparable to Gamma's function?",
    options: ["Spellcheck", "Slide Timer", "Design/Outline Generator", "Animations Panel"],
    correctAnswer: "Design/Outline Generator",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "Botpress or similar platforms are primarily used for creating:",
    options: ["Deepfake videos", "New programming languages", "Custom interactive chatbots for specific business use cases", "Large Language Models from scratch"],
    correctAnswer: "Custom interactive chatbots for specific business use cases",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "The primary purpose of using AI in conjunction with Google Apps Script or VBA is:",
    options: ["To generate marketing copy for automation scripts", "To automatically debug LLMs", "To write the actual automation code for Sheets/Excel", "To analyze meeting minutes"],
    correctAnswer: "To write the actual automation code for Sheets/Excel",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "What is the main advantage of a dedicated tool like Rytr.me over a general LLM for content creation?",
    options: ["It can only write code", "It doesn't require a prompt", "It is faster for highly specific marketing/SEO templates", "It can transcribe meetings"],
    correctAnswer: "It is faster for highly specific marketing/SEO templates",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "When using a PDF Analyzer tool, the AI performs what key action?",
    options: ["Converts the PDF to an image", "Changes the text font", "Extracts text and allows conversational Q&A on the document content", "Compresses the file size"],
    correctAnswer: "Extracts text and allows conversational Q&A on the document content",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "Which AI tool category is Llamacoder most focused on?",
    options: ["Video Editing", "Legal Document Analysis", "Software Development (Code Generation)", "Financial Auditing"],
    correctAnswer: "Software Development (Code Generation)",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "In a low-code/no-code app builder like Lovable.dev, what primary AI function speeds up development?",
    options: ["AI automatically sets up the payment gateway", "Generating music for the app", "Generating UI components or database schemas from text instructions", "Auto-creating user accounts"],
    correctAnswer: "Generating UI components or database schemas from text instructions",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "A key use case for Fireflies.ai / Otter.ai is integrating with which type of application?",
    options: ["Image editors (Photoshop)", "Coding IDEs (VS Code)", "Virtual meeting platforms (Zoom/Teams/Meet)", "Accounting software (Tally)"],
    correctAnswer: "Virtual meeting platforms (Zoom/Teams/Meet)",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "What does the “T” in GPT (as in CA GPT) stand for?",
    options: ["Temporary", "Toolkit", "Transformer", "Total"],
    correctAnswer: "Transformer",
    category: "Day 2: Specialized Tools"
  },
  {
    question: "What is the common threat that Prompt Injection protects against in a custom chatbot setup (like Botpress)?",
    options: ["Users asking the bot to generate images", "Users giving normal, clear instructions", "Malicious users overriding the bot's core rules/instructions", "The bot running out of storage"],
    correctAnswer: "Malicious users overriding the bot's core rules/instructions",
    category: "Day 2: Specialized Tools"
  }
];