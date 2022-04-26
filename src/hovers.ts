import * as vscode from "vscode";

export function initHovers() {
  addCharCountHover();
}

function addCharCountHover() {
  vscode.languages.registerHoverProvider(["javascript", "typescript"], {
    provideHover(doc: vscode.TextDocument, pos: vscode.Position) {
      const lineText = doc.lineAt(pos.line).text;

      return new vscode.Hover(
        `Char count for this line is: ${lineText.length}.`
      );
    },
  });
}