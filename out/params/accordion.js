"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: '|`Array<any>`或`AccordionMenuType`|--|必填，数据源，可以自定义数组或者使用预设的`AccordionMenuType`|',
    titleKey: '|`string`|\'title\'|可选，标题的属性名，item[titleKey]类型为`string`，为标题显示内容|',
    loadingKey: '|`string`|\'loading\'|可选，子菜单是否加载中的判断属性名，item[loadingKey]类型为`boolean`|',
    childrenKey: '|`string`|\'children\'|可选，子菜单的属性名，item[children]类型为`Array<any>`|',
    disabledKey: '|`string`|\'disabled\'|可选，是否禁用的属性名，item[disabledKey]类型为`boolean`|',
    activeKey: '|`string`|\'active\'|可选，子菜单是否激活的属性名，item[activeKey]类型为`boolean`|',
    openKey: '|`string`|\'open\'|可选，菜单是否展开的属性名，item[openKey]类型为`boolean`|',
    restrictOneOpen: '|`boolean`|false|可选，限制一级菜单同时只能打开一个，默认不限制|',
    menuItemTemplate: '|`TemplateRef<any>`|内置|可选，一级菜单内容条模板，可用变量值见下|',
    itemTemplate: '|`TemplateRef<any>`|内置|可选，二级菜单内容条模板，可用变量值见下|',
    noContentTemplate: '|`TemplateRef<any>`|内置|可选，没有内容的时候使用自定义模板，可用变量值见下|',
    loadingTemplate: '|`TemplateRef<any>`|内置|可选，加载中使用自定义模板，可用变量值见下|',
    innerListTemplate: '|`TemplateRef<any`>|内置|可选，二级菜单内容完全自定义，用做折叠面板，可用变量值见下|',
    linkType: '|`\'routerLink\'\|\'hrefLink\'\|\'dependOnLinkTypeKey\'\|\'\'`|\'\'|可选，`\'routerLink\'`为路由场景；`\'hrefLink\'`为外部链接场景；`\'dependOnLinkTypeKey\'`为动态路由或外部链接场景；`\'\'`为默认非链接类型（无法右键打开新标签页）|',
    linkTypeKey: '|`string`|\'linkType\'|可选，链接内容的类型的key值，用于linkType为`\'dependOnLinkTypeKey\'`时指定对象链接类型属性名，item[linkTypeKey]类型为`\'routerLink\'|\'hrefLink\'\|string`，其中`\'routerLink\'`为路由链接，`\'hrefLink\'`为外部链接，其他为默认非链接类型|',
    linkKey: '|`string`|\'link\'|可选，链接内容的key，用于linkType为连接类型记非`\'\'`时，链接的取值的属性值，item[linkKey]为路由地址或者超链接地址|',
    linkTargetKey: '|`string`|\'target\'|可选，链接目标窗口的key，用于链接类型，item[linkTargetKey]为单个链接的目标窗口|',
    linkDefaultTarget: '|`string`|\'_self\'|可选，不设置target的时候target默认值，用于链接类型|',
};
//# sourceMappingURL=accordion.js.map