import { PromptTemplate } from '@langchain/core/prompts';

export const prPrompt = PromptTemplate.fromTemplate(`
You are a senior software engineer.

Given the following Jira Ticket:

Ticket Key:
{key}

Title:
{title}

Description:
{description}

Acceptance Criteria:
{acceptanceCriteria}

Git Diff:
{diff}

Recent Commits:
{commits}

Generate:
1. PR Title
2. Summary of changes
3. Testing instructions
4. Risks
5. Additional notes

Respond in markdown.
`);
