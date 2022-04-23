import * as vscode from "vscode";

export function initEventListeners(charLimit: number) {
  onExceedCharLimit(charLimit);
}

function onExceedCharLimit(charLimit: number) {
  const setTextYellow = vscode.window.createTextEditorDecorationType({ color: "#FFFF00" });

  vscode.workspace.onDidChangeTextDocument(
    (e: vscode.TextDocumentChangeEvent) => {
      const { activeTextEditor: editor } = vscode.window;

      if (!editor) return;

      const { line: lineCount, character: charCount } =
        editor.selection.active;

      const lastCharPos = new vscode.Position(lineCount, charCount);
      const lineText = editor.document.lineAt(lastCharPos).text;

      editor.setDecorations(setTextYellow, []);

      if(lineText.length > charLimit) {
        editor.setDecorations(setTextYellow, [
          new vscode.Range(
            new vscode.Position(lineCount, charLimit),
            new vscode.Position(lineCount, lineText.length)
          )
        ]);
      }
    }
  );
}