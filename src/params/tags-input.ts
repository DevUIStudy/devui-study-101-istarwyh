export default{
tags:     '|`Array`|[]|必选，记录输入的标签和选择的标签列表|',
displayProperty:     '|`string`|\'name\'|可数，列表项使用的属性名|',
placeholder:     '|`boolean`|\'\'|可选，输入框的placeholder|',
minLength:     '|`number`|3|可选，输入标签内容的最小长度|',
maxLength:     '|`number`|Number.MAX_SAFE_INTEGER|可选，输入标签内容的最大长度|',
maxTags:     '|`number`|Number.MAX_SAFE_INTEGER|可选，可输入标签的最大个数|',
caseSensitivity:     '|`boolean`|false|可选，大小写敏感，默认忽略大小写|',
spellcheck:     '|`boolean`|true|可选，input输入框的spellcheck|',
isAddBySpace:     '|`boolean`|true|可选，是否支持空格键输入标签|',
suggestionList:     '|`Array`|[]|可选，下拉选项，默认可选择的标签列表|',
checkBeforeAdd:     '|`function\|Promise\|Observable`|无|可选，自定义校验函数，类型为(newTag:string)=>boolean或者Promise<boolean>或者Observable<boolean>|',
};
