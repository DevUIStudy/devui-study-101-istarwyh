import requests
from lxml import html
import time
headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
}
url='https://github.com/DevCloudFE/ng-devui/blob/master/devui/' #需要爬数据的网址
page=requests.Session().get(url,headers=headers) 
tree=html.fromstring(page.content) 
result=tree.xpath('//*[@id="js-repo-pjax-container"]/div[2]/div/div[3]/table//tr[@class="js-navigation-item"]//td[@class="content"]//a/text()') #获取需要的数据
print (result)
for title in result:
    if(title.find('.')) :continue
    else :url='https://github.com/DevCloudFE/ng-devui/blob/master/devui/'+title+'/doc/api.md'
    page=requests.Session().get(url)
    tree=html.fromstring(page.content)
    with open(title+".ts",'wt') as tar:
        tar.write("export default {"+'\n')
        table=tree.xpath('//*[@id="readme"]/article/table[1]//tr')
        for tr in table:
            parameter=tr.xpath('//td[1]/text()')
            types=tr.xpath('//td[2]//text()')
            default=tr.xpath('//td[3]/text()')
            explaination=tr.xpath('//td[4]/text()')
            tar.write(parameter+':'+'"'+types+'|'+default+'|'+explaination+'"'+','+'\n')
            time.sleep( 5 )
            