import * as vscode from "vscode";
import { getConfigs } from "./configs";
import { initEventListeners } from "./events";
import { initHovers } from "./hovers";

export async function activate(_context: vscode.ExtensionContext) {
  const { lengthLimit, exceedColor } = await getConfigs();
  initHovers();
  initEventListeners(lengthLimit, exceedColor);
}

export function deactivate() {}