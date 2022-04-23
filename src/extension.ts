import * as vscode from "vscode";
import { getLineLength } from "./configs";
import { initEventListeners } from "./events";
import { initHovers } from "./hovers";

export async function activate(_context: vscode.ExtensionContext) {
  const charLimit: number = await getLineLength();
  initHovers();
  initEventListeners(charLimit);
}

export function deactivate() {}