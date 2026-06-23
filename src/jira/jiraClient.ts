import { JiraTicket } from '../types/JiraTicket';

export async function getJiraTicket(ticketId: string): Promise<JiraTicket> {
  return {
    key: ticketId,
    title: 'add method to handle file sending and retrieving',
    description:
      'users cannot send files trought telegram. implement support for file uploads and downloadas',
    acceptanceCriteria: ['files should e uploaded to telegram', 'files should be retriver later'],
  };
}
