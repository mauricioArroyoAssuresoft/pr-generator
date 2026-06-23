const ticketId = process.argv[2];

if (!ticketId) {
  console.error("Please provide a Jira ticket ID.");
  process.exit(1);
}

console.log(`Ticket ID: ${ticketId}`);
