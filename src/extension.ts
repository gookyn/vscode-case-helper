import * as vscode from 'vscode';
import { changeCase } from './change-case';
import { commandType } from './constants';

// activate extension
export function activate(context: vscode.ExtensionContext) {
  // register commands
  commandType.forEach(item => {
    vscode.commands.registerCommand(item.command, () => {
      changeCase(item.type);
    });
  })
}

// deactivate extension
export function deactivate() {}
