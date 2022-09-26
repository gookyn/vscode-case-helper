import * as vscode from 'vscode';

export const changeCase = (type) => {
  // The currently active editor
  const editor = vscode.window.activeTextEditor || {};
  const { document, selection, selections } = editor;

  // Get the selected text range
  // TODO multi-line text
  const range = new vscode.Range(selection.start, selection.end);

  // Get the selected text
  const selectedText = document.getText(range);

  // Change case according to the command type
  let changedText = '';
  switch(type) {
    case 'lower':
      changedText = selectedText.toLowerCase();
      break;
    case 'upper':
      changedText = selectedText.toUpperCase();
      break;
    default:
      break;
  }

  // Replace the text
  editor.edit((editBuilder) => {
    editBuilder.replace(range, changedText);
  });
}