import { getJiraTicket } from "./jira/jiraClient";
import { getGitDiff } from "./git/diffService";
import { getRecentCommits } from "./git/commitService";
import { prChain } from './chains/prChain';

async function main() {
  const ticketId = process.argv[2];
  if (!ticketId) {
    console.error("Please provide a Jira ticket ID.");
    process.exit(1);
  }

  const ticket = await getJiraTicket(ticketId);
  const diff = await getGitDiff();
  const commits = await getRecentCommits();
  const response = await prChain.invoke({
    key: ticket.key,
    title: ticket.title,
    description: ticket.description,
    acceptanceCriteria: ticket.acceptanceCriteria.join("\n"),
    diff,
    commits,
  });

  console.log("\nGenerated PR:\n");
  console.log(response);
}

main();
