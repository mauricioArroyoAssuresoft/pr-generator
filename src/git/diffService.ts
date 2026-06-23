import { exec } from 'child_process';
import { promisify } from 'util';

const exectAsync = promisify(exec);

export async function getGitDiff(): Promise<string> {
  try {
    const { stdout } = await exectAsync('git diff');

    return stdout;
  } catch (error) {
    console.error('failed to retrieve git diff');
    
    throw error;
  }
}
