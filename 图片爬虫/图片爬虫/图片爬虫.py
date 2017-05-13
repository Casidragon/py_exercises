import os
import time
import urllib.request
import sys
import re
targetDir=r'F:\pythonTest'
if not os.path.exists(targetDir):
    os.mkdir(targetDir)
    print('targetDir has been created.')
else:
    print('targetDir exists.')
url=input('please input a website.\n')
day=time.strftime('%Y%m%d')
def treatDir(str):
    trueurl=re.findall(r'(www.*\.com)',str)[0]
    return trueurl
websiteDir=targetDir+os.sep+treatDir(url)
if not os.path.exists(websiteDir):
    os.mkdir(websiteDir)
    print('websiteDir has been created.')
else:
    print('websiteDir exists.')
storeDir=websiteDir+os.sep+day
if not os.path.exists(storeDir):
    os.mkdir(storeDir)
global flag
fakePost={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'}
def savePage(url,data):
    saveDir=storeDir+os.sep+'1.txt'
    print(saveDir)
    f=open(saveDir,'w',encoding='utf-8')
    f.write(data)
    f.close()
def openurl(url):
    trueurl=urllib.request.Request(url,headers=fakePost)
    webContent=urllib.request.urlopen(trueurl).read()
    webContent=webContent.decode('utf-8')
    return webContent
try:
    url='http://'+treatDir(url)
    webContent=openurl(url)
    savePage(url,webContent)
    flag=1
except:
    url='https://'+treatDir(url)
    webContent=openurl(url)
    savePage(url,webContent)
    flag=0
def findname(url):
    a=url.rindex('/')
    t=storeDir+os.sep+url[a+1:]
    return t
for link , t in set(re.findall(r'(http[^<>"\']*?\.(jpg|gif|png|jpeg))',webContent)):
    print(link)
    try:
        urllib.request.urlretrieve(link,findname(link))
    except:
        print('failed')