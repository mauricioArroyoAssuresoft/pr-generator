import { env } from '../config/env';
import { JiraTicket } from '../types/JiraTicket';
import axios from 'axios';

export async function getJiraTicket(ticketId: string): Promise<JiraTicket> {
  try {
    const response = await axios.get(`${env.jiraBaseUrl}/rest/api/3/issue/${ticketId}`, {
      auth: {
        username: env.jiraEmail,
        password: env.jiraApiToken,
      },
    });
    const issue = response.data;

    return {
      key: issue.key,
      title: issue.fields.summary,
      description: '',
      acceptanceCriteria: [],
    };
  } catch (error: any) {
    console.error(`Failed to retrieve Jira ticket: ${ticketId}`);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      // console.error(`Body: ${error.response.data}`);
    }

    throw { message: 'We throw from the getJiraTicket function' };
  }
}
