import * as vscode from "vscode";

export function initEventListeners(lengthLimit: number, exceedColor: string) {
  onExceedCharLimit(lengthLimit, exceedColor);
}

function onExceedCharLimit(lengthLimit: number, exceedColor: string) {
  const setExceedColor = vscode.window.createTextEditorDecorationType({ color: exceedColor });
  const exceedingLines: Record<number, vscode.Range> = {};
  const wasGreater: Set<number> = new Set();

  vscode.workspace.onDidChangeTextDocument(
    (e: vscode.TextDocumentChangeEvent) => {
      const { activeTextEditor: editor } = vscode.window;

      if (!editor) return;

      const { line: lineCount, character: charCount } =
        editor.selection.active;

      const lastCharPos = new vscode.Position(lineCount, charCount);
      const lineText = editor.document.lineAt(lastCharPos).text;

      if(lineText.length > lengthLimit) {
        exceedingLines[lineCount] = new vscode.Range(
          new vscode.Position(lineCount, lengthLimit),
          new vscode.Position(lineCount, lineText.length)
        );

        wasGreater.add(lineCount);
      }

      if(wasGreater.has(lineCount) && lineText.length <= lengthLimit) {
        delete exceedingLines[lineCount];
        wasGreater.delete(lineCount);
      }

      editor.setDecorations(setExceedColor, Object.values(exceedingLines));
    }
  );
}