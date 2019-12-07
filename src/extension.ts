// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "AutoDevui" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello VS Code!');
	});
	context.subscriptions.push(disposable);

	const message_error = '你有一个错误要解决哦~';
	let disposable_1 = vscode.commands.registerCommand('extension.showError',function(){
		vscode.window.showErrorMessage(message_error);
	});
	context.subscriptions.push(disposable_1);

	context.subscriptions.push(vscode.commands.registerCommand('extension.demo.getCurrentFilePath', (uri) => {
		vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
	}));
	
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	console.log('它已经被释放了');
}

module.exports = {
	activate,
	deactivate
}
