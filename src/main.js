'use strict';

const vscode = require('vscode');
const semicolonCommand = require('./lib/semicolon-command');

module.exports = {
  activate (context) {
    context.subscriptions.push(
      vscode.commands.registerTextEditorCommand('extension.trailing-semicolon', (editor, textEdit) => {
        return semicolonCommand(editor, textEdit);
      })
    );
  },
  deactivate () { }
};
