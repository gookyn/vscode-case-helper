import * as vscode from 'vscode';
import { COMMANDS } from './commands';
import { changeSelectedText } from './change-selected-text';

// activate extension
export function activate(context: vscode.ExtensionContext) {
  // register commands
  COMMANDS.forEach((item) => {
    vscode.commands.registerCommand(item.command, () => {
      changeSelectedText(item.type);
    });
  });
}

// deactivate extension
export function deactivate() {}
