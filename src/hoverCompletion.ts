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

            //devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.        
            const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
            
            // console.log(componentRegex.test(text));
            console.log("text:"+text);
            // console.log(componentRegex);// componentRegex是一个Object?
            if (componentRegex.test(text)) {
                text.match(componentRegex);
                const n = RegExp.$1.substring(2);
                const nam = n.replace(n[0],n[0].toUpperCase());//匹配之后对字符串处理然后匹配导出的模块
                let name: string;
                if (nam.indexOf("-") !== -1){
                    name = capitalize(nam);
                }else{
                    name = nam;
                }
                console.log("name:"+name+'\n');

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
function capitalize(string: string){
    // split() 方法用于把一个字符串分割成字符串数组。
    var words =string.split("-");
    for(var i=0;i<words.length;i++)
    {
        // charAt() 方法可返回指定位置的字符。
        // slice() 方法可从已有的数组中返回选定的元素。
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
        // 第一个单词的第一个字母转化为大写，然后再将该单词的后面字母使用slice()接上即可。
    }
    // join() 方法用于把数组中的所有元素放入一个字符串
    return words.join("");
}
const hoverCompletion = languages.registerCompletionItemProvider('html', {
    provideCompletionItems}, ...completionTriggerChars);
module.exports = function(context: { subscriptions: any[]; }) {
    context.subscriptions.push(hoverCompletion
    );
};