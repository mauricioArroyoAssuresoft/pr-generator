import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { prPrompt } from '../prompts/prPrompt';

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-2.5-flash',
  temperature: 0,
});

export const prChain = prPrompt.pipe(model);
