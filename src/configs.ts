import * as vscode from 'vscode';

export async function getConfigs(): Promise<{ lengthLimit: number, exceedColor: string }> {
  const configs: vscode.WorkspaceConfiguration = await vscode.workspace.getConfiguration();
  let lengthLimit: number | string | null | undefined = configs.get("lineMonitor.lengthLimit");
  let exceedColor: number | string | null | undefined = configs.get("lineMonitor.hexColor");

  lengthLimit = typeof(lengthLimit) === "number" ? lengthLimit : 100;
  exceedColor =
    typeof exceedColor === "string" &&
    exceedColor.length === 7 &&
    exceedColor[0] === "#"
      ? exceedColor
      : "#FFFF00";
  return { lengthLimit, exceedColor };
}