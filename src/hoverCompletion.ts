'use strict';
import {
    window, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument,
    languages, CompletionItem, Position, CompletionItemKind, Range, TextEdit
} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from './params';

const completionTriggerChars = [" ", "\n"];  
function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
            const start: Position = new Position(0, 0);
            const range: Range = new Range(start, position);
            const text = document.getText(range);
            
            // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
            // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;

            const componentRegex = /<(d-[a-zA-Z0-9]*)\b[^<>]*$/g;
            
            // console.log(componentRegex.test(text));
            // console.log(text);
            // console.log(componentRegex);// componentRegex是一个Object?
            if (componentRegex.test(text)) {
                text.match(componentRegex);
                const n = RegExp.$1.substring(2);
                const name = n.replace(n[0],n[0].toUpperCase());//匹配之后对字符串处理然后匹配导出的模块
                
                // console.log(name+'\n');

                const params = components[name];// components相当于是一个数组?
                if (params) {
                    const properties = Object.keys(params);
                    const completionItems = properties.map((prop) => {
                        // CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
                        // https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
                        const completionItem = new CompletionItem(prop, CompletionItemKind.Variable);
                        completionItem.detail = params[prop];

                        return completionItem;
                    });

                    return completionItems;
                }
                return [];
            }
            return [];
}
const hoverCompletion = languages.registerCompletionItemProvider('html', {
    provideCompletionItems}, ...completionTriggerChars);
module.exports = function(context: { subscriptions: any[]; }) {
    
    context.subscriptions.push(hoverCompletion
    );
};