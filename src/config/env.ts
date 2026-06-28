function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  jiraBaseUrl: required('JIRA_BASE_URL'),
  jiraEmail: required('JIRA_EMAIL'),
  jiraApiToken: required('JIRA_API_TOKEN'),
};
