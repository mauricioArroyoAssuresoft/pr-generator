import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { prPrompt } from '../prompts/prPrompt';
import { prReponseSchema } from '../parsers/prOutputParser';

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-2.5-flash',
  temperature: 0,
});
const strcturedModel = model.withStructuredOutput(prReponseSchema);
export const prChain = prPrompt.pipe(strcturedModel);
