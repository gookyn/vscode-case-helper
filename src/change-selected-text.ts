import * as vscode from 'vscode';
import type { TextEditor } from 'vscode';
import { COMMANDS } from './commands';

export const changeSelectedText = (type: string) => {
  // The currently active editor
  const editor = vscode.window.activeTextEditor || ({} as TextEditor);
  const { document, selection, selections } = editor;

  // Get the selected text range
  // TODO multi-line text
  const range = new vscode.Range(selection.start, selection.end);

  // Get the selected text
  const selectedText = document.getText(range);

  // Change case according to the command type
  let changedText = selectedText;
  const command =
    COMMANDS.find((item) => item.type === type) || ({} as { fn: Function });
  if (command.fn && typeof command.fn === 'function') {
    changedText = command.fn(selectedText);
  }

  // Replace the text
  editor.edit((editBuilder) => {
    editBuilder.replace(range, changedText);
  });
};
