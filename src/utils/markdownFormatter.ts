import { PRResponse } from '../parsers/prOutputParser';

export function formatPRAsMarkdown(pr: PRResponse): string {
  return `
# Title
${pr.title}

# Summary
${pr.summary}

# Testing
${pr.testing}

# Risks
${pr.risks}

# Notes 
${pr.notes}
`;
}
