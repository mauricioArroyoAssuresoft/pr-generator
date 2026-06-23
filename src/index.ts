import { getJiraTicket } from "./jira/jiraClient";
import { getGitDiff } from "./git/diffService";
import { getRecentCommits } from "./git/commitService";

async function main() {
  const ticketId = process.argv[2];

  if (!ticketId) {
    console.error("Please provide a Jira ticket ID.");
    process.exit(1);
  }

  console.log(`Ticket ID: ${ticketId}`);

  const ticket = await getJiraTicket(ticketId);

  console.log("\nTicket:");
  console.log(ticket);

  const diff = await getGitDiff();

  console.log("\nGit Diff:");
  console.log(diff);

  const commits = await getRecentCommits();

  console.log("\nRecent Commits:");
  console.log(commits);
}

main();
