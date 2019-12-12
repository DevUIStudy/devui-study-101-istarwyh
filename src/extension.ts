// import vscode from 'vscode';
const vscode = require('vscode');

/**
 * @param {*} context
 */
exports.activate =function(context){

	console.log('Congratulations, your extension "AutoDevui" is now active!');
	console.log(vscode);
    require('./hover.ts')(context); // 悬停提示

	// console.error('(⊙﹏⊙)挂了');

	
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		vscode.window.showInformationMessage('Hello VS Code!');
	});
	context.subscriptions.push(disposable);

	const message_error = '你有一个错误要解决哦~';
	let disposable_1 = vscode.commands.registerCommand('extension.showError',function(){
		vscode.window.showErrorMessage(message_error);
	});
	context.subscriptions.push(disposable_1);

	context.subscriptions.push(vscode.commands.registerCommand('extension.getCurrentFilePath', (uri) => {
		vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
	}));
	
};
exports.deactivate = function() {
    console.log('您的扩展“AutoDevui”已被释放！')
};