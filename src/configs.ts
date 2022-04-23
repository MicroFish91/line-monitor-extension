import * as vscode from 'vscode';

export async function getConfigs() {
  const configs: vscode.WorkspaceConfiguration = await vscode.workspace.getConfiguration();
  const lineLength: number | undefined = configs.get("lineMonitor.charLimit");
  return lineLength ? lineLength : 100;
}