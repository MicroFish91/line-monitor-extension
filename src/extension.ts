import * as vscode from "vscode";
import { getConfigs } from "./configs";
import { initEventListeners } from "./events";
import { initHovers } from "./hovers";

export async function activate(_context: vscode.ExtensionContext) {
  const charLimit: number = await getConfigs();
  initHovers();
  initEventListeners(charLimit);
}

export function deactivate() {}