'use strict';
const vscode = require('vscode');
const Range = vscode.Range;
module.exports = semicolonCommand;

function semicolonCommand (textEditor, textEditorEdit) {
  const cursorPosition = textEditor.selection.active;
  const line = textEditor.document.lineAt(cursorPosition);

  if (line.text[line.text.length - 1] === ';') {
    textEditorEdit.delete(new Range(
      line.range.end.translate(0, -1),
      line.range.end
    ));
  } else {
    textEditorEdit.insert(line.range.end, ';');
    vscode.commands.executeCommand('cursorMove', { 'to': 'wrappedLineEnd'});
  }
}
