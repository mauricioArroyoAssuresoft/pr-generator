# PR Generator from Jira Tickets and Git Code Diffs

An AI-powered Pull Request description generator built with **TypeScript**, **LangChain (LCEL)**, **Google Gemini**, and the **Jira REST API**.

The application automatically gathers information from a Jira issue and the local Git repository to generate a structured Pull Request description.

---

# Features

- Retrieve Jira issues using the Jira REST API
- Authenticate using Jira API Tokens
- Parse Atlassian Document Format (ADF)
- Extract:
  - Title
  - Description
  - Acceptance Criteria
- Retrieve local Git diff
- Retrieve recent Git commits
- Generate a Pull Request using Google Gemini
- Produce structured markdown output

---

# Project Architecture

```
Developer
    │
    ▼
Jira Ticket ID
    │
    ▼
Jira REST API
    │
    ▼
ADF Parser
    │
    ├───────────────┐
    ▼               │
Description         │
Acceptance Criteria │
                    │
Git Diff ───────────┤
                    │
Recent Commits ─────┤
                    ▼
            LangChain LCEL
                    │
                    ▼
             Gemini 2.5 Flash
                    │
                    ▼
          Structured Output Parser
                    │
                    ▼
           Markdown Formatter
                    │
                    ▼
        Generated Pull Request
```

---

# Technologies

- TypeScript
- Node.js
- LangChain (LCEL)
- Google Gemini
- Axios
- Jira REST API v3
- Zod
- dotenv

---

# Folder Structure

```
src
├── chains
│   └── prChain.ts
├── config
│   └── env.ts
├── git
│   ├── commitService.ts
│   └── diffService.ts
├── jira
│   ├── acceptanceCriteriaParser.ts
│   ├── adfParser.ts
│   └── jiraClient.ts
├── parsers
│   └── prOutputParser.ts
├── prompts
│   └── prPrompt.ts
├── types
│   └── JiraTicket.ts
├── utils
│   └── markdownFormatter.ts
└── index.ts
```

---

# Installation

Clone the repository.

```bash
git clone <repository-url>

cd pr-generator
```

Install dependencies.

```bash
npm install
```

---

# Environment Variables

Create a `.env` file.

Example:

```env
GOOGLE_API_KEY=your_google_api_key

JIRA_BASE_URL=https://yourcompany.atlassian.net
JIRA_EMAIL=your.email@company.com
JIRA_API_TOKEN=your_jira_api_token
```

---

# Obtaining a Jira API Token

1. Log into your Atlassian account.

2. Open:

https://id.atlassian.com/manage-profile/security/api-tokens

3. Click:

```
Create API token
```

4. Copy the generated token.

5. Save it inside your `.env`.

---

# Running the Project

Generate a Pull Request description from a Jira ticket.

Example:

```bash
npm run dev SCRUM-1
```

---

# Example Output

```text
Generated PR:

# Title

feat: Enable PR Generation Workflow

# Summary

...

# Testing

...

# Risks

...

# Notes

...
```

---

# Current Workflow

```
Jira Ticket ID
        │
        ▼
Fetch Jira Ticket
        │
        ▼
Parse ADF
        │
        ▼
Extract Description
        │
        ▼
Extract Acceptance Criteria
        │
        ▼
Retrieve Git Diff
        │
        ▼
Retrieve Recent Commits
        │
        ▼
Prompt Gemini
        │
        ▼
Structured Output
        │
        ▼
Markdown PR
```

---

# Example Prompt Inputs

The LLM receives:

- Jira Key
- Jira Title
- Description
- Acceptance Criteria
- Git Diff
- Recent Commits

---

# Current Limitations

This prototype assumes:

- The Jira issue exists.
- Acceptance Criteria are stored in a known Jira custom field.
- The project is executed inside a Git repository.
- The Git diff is reasonably sized.
- The Google Gemini API key is valid.

The prototype currently does not include:

- Retrieval-Augmented Generation (RAG)
- Vector databases
- Embeddings
- Prompt injection protection
- Token budgeting
- Caching
- Retry logic
- LangSmith tracing

These are proposed as future production improvements.

---

# Future Improvements

- RAG using repository documentation
- Embedding-based code retrieval
- Contextual Compression
- Parent Document Retrieval
- LangSmith observability
- Cost monitoring
- Automatic pull request creation through GitHub API
- Multi-provider LLM support
- Streaming responses
- Prompt versioning
- Better acceptance criteria detection across Jira projects

---

# Example Use Case

Instead of manually writing:

- PR title
- Summary
- Testing steps
- Risks
- Notes

the developer simply runs:

```bash
npm run dev SCRUM-1
```

and receives a complete Pull Request description generated from:

- Jira ticket
- Git changes
- Recent commits

---

# Author

Mauricio Arroyo

AI Engineering Prototype

2026