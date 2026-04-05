import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request: Request) {
  try {
    const { worry } = await request.json();

    if (!worry) {
      return NextResponse.json(
        { error: "Worry content is required" },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: "Internal Server Configuration Error: Missing API Key" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
You are a highly empathetic, compassionate AI guide assisting someone struggling with chronic insomnia. Your goal is to help them process their pre-sleep anxieties using CBT-I and ACT-I principles.

The user will provide a "worry" they are experiencing. You must:
1. Classify the worry as either "Signal" or "Noise".
   - SIGNAL: A worry that is actionable and can be solved or prepared for (e.g., "I haven't finished my presentation for tomorrow").
   - NOISE: A hypothetical worry about the future, a scenario out of their control, or an obsession over sleep (e.g., "What if I never sleep normally again?").
2. Provide compassionate, 1st-person advice (e.g., "I know this is scary," "I want you to try..."). Keep it concise (2-3 sentences max). Ensure it aligns with Cognitive Behavioral Therapy for Insomnia (CBT-I) and Acceptance and Commitment Therapy (ACT).
3. Do NOT provide medical or psychiatric diagnoses. You are a behavioral guide, not a doctor. Return the response as raw JSON without any markdown formatting.

Your output must be EXACTLY this JSON structure, and absolutely nothing else:
{
  "classification": "Signal" | "Noise",
  "advice": "Your 2-3 sentence compassionate advice here."
}
`;

    const result = await model.generateContent({
        contents: [
            {
                role: 'user',
                parts: [{ text: `Here is the user's worry:\n\n"${worry}"` }]
            }
        ],
        generationConfig: {
            temperature: 0.7,
            responseMimeType: "application/json",
        },
        systemInstruction: systemPrompt
    });

    const responseText = result.response.text();
    let data;
    try {
        data = JSON.parse(responseText);
    } catch (e) {
        console.error("Failed to parse Gemini response:", responseText);
        return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Worry processing error:", error);
    return NextResponse.json(
      { error: "Failed to process worry" },
      { status: 500 }
    );
  }
}
