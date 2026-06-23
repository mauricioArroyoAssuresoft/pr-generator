import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function getRecentCommits(): Promise<string> {
  try {
    const { stdout } = await execAsync('git log --oneline -5');
  
    return stdout;
  } catch (error) {
    console.error("failed to retrieve commit history");

    throw error;
  }
}
