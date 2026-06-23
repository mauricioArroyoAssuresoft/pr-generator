import { getJiraTicket } from "./jira/jiraClient";
import { getGitDiff } from "./git/diffService";
import { getRecentCommits } from "./git/commitService";
import { prPrompt } from "./prompts/prPrompt";

async function main() {
  const ticketId = process.argv[2];

  if (!ticketId) {
    console.error("Please provide a Jira ticket ID.");
    process.exit(1);
  }

  console.log(`Ticket ID: ${ticketId}`);

  const ticket = await getJiraTicket(ticketId);

  const diff = await getGitDiff();

  const commits = await getRecentCommits();

  const prompt = await prPrompt.format({
    key: ticket.key,
    title: ticket.title,
    description: ticket.description,
    acceptanceCriteria: ticket.acceptanceCriteria.join("\n"),
    diff,
    commits,
  });

  console.log("\nGenerated Prompt:\n");
  console.log(prompt);
}

main();
