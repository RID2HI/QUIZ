
import { GoogleGenAI, Type } from "@google/genai";
import { Question } from '../types';
import { NUMBER_OF_QUESTIONS } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const quizSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        question: {
          type: Type.STRING,
          description: "The quiz question."
        },
        options: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          },
          description: "An array of 4 possible answers."
        },
        correctAnswer: {
          type: Type.STRING,
          description: "The correct answer from the options array."
        }
      },
      required: ["question", "options", "correctAnswer"]
    }
};


export const generateQuizQuestions = async (topic: string, difficulty: string): Promise<Question[]> => {
    const prompt = `Generate ${NUMBER_OF_QUESTIONS} quiz questions about "${topic}" with a difficulty level of "${difficulty}". Each question must have exactly 4 multiple-choice options. Ensure one of the options is the correct answer.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: quizSchema,
                temperature: 0.7,
            },
        });
        
        const jsonText = response.text.trim();
        const questions = JSON.parse(jsonText) as Question[];

        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error("Failed to generate valid quiz questions. The response was empty or not an array.");
        }

        // Validate structure of each question
        questions.forEach(q => {
            if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || !q.correctAnswer) {
                throw new Error("Received malformed question data from API.");
            }
        });

        return questions;
    } catch (error) {
        console.error("Error generating quiz questions:", error);
        throw new Error("There was an issue generating the quiz. Please try a different topic or try again later.");
    }
};
