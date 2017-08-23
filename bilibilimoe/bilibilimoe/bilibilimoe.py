#coding=utf-8

import re
import json
import os
import sys
import time
import random
import pprint
from urllib import request


runFlag = 1
targetDir = r'moeStastics'
if not os.path.exists(targetDir):
    os.makedirs(targetDir)


 
while runFlag:
    fake_headers = [{
                     'Host': 'bangumi.bilibili.com',
                     'Proxy-Connection': 'keep-alive',
                     'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:14.0) Gecko/20100101 Firefox/14.0.1'},
                    {
                    'Host': 'bangumi.bilibili.com',
                    'Connection': 'keep-alive',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'},
                    {
                     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                     'Connection': 'keep-alive',
                     'User-Agent': 'ozilla/5.0 (Windows NT 6.2; rv:16.0) Gecko/20100101 Firefox/16.0'},
                    {
                     'Host': 'bangumi.bilibili.com',
                     'Connection': 'keep-alive',
                     'Accept': 'text/html, */*; q=0.01',
                     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36'}]

    #Get characters' ids
    url = 'http://bangumi.bilibili.com/moe/2017/2/api/schedule/current'
    response = request.urlopen(url).read()
    response = response.decode('utf-8')
    D = json.loads(response)

    newL = []
    newD = {}
    
    if D['result']['voteGroups'] != []:
        for i in range(0 , len(D['result']['voteGroups'])):
            for j in range(0 , len(D['result']['voteGroups'][i]['characters'])):
                name = D['result']['voteGroups'][i]['characters'][j]['chn_name']
                id = D['result']['voteGroups'][i]['characters'][j]['character_id']
                characterList = {'name':name,'id':id,'trueLove': 0, 'generalVotes': 0, 'allVotes': 0, 'deltaVotes':0 }
                newL.append(characterList)
            dictName = 'Group_' + '%d' % i
            newD[dictName] = newL
            newL = []
    else:
        time.sleep(3600 * 24)
        break


    def voteAdd(startPosition, endPosition, vote_dict):
        for j in range(startPosition, endPosition):
            idPath = vote_dict['result'][j]['character_ids']
            for characterId in re.findall(r'\d+',idPath):
                for k in range(0 , len(D['result']['voteGroups'])):
                    dictName = 'Group_' + '%d' % k
                    for l in range(0 , len(D['result']['voteGroups'][k]['characters'])):
                        idPath = newD[dictName][l]['id']   
                        if int(characterId) == int(idPath):
                            if vote_dict['result'][j]['type'] == 1:
                                newD[dictName][l]['trueLove'] += 1
                            else:
                                newD[dictName][l]['generalVotes'] +=1
                            break

    def sort():
        tempList = []
        for i in range(0 , len(D['result']['voteGroups'])):
            dictName = 'Group_' + '%d' % i
            for j in range(0 , len(D['result']['voteGroups'][i]['characters'])):
                for k in range(j, len(D['result']['voteGroups'][i]['characters'])):
                    if int(newD[dictName][j]['allVotes']) < int(newD[dictName][k]['allVotes']):
                        tempList = newD[dictName][j]
                        newD[dictName][j] = newD[dictName][k]
                        newD[dictName][k] = tempList


    def putOut():
        day=time.strftime('%Y%m%d',time.localtime())
        nowTime = time.strftime('%H : %M : %S', time.localtime())
        fileName = targetDir+ os.sep +'moe_' + day + '.log'
        sort()
        print(nowTime)
        pprint.pprint(newD,width = 170)
        pprint.pprint(failedList)
        f=open(fileName,'a',encoding='utf-8')
        f.write(nowTime)
        f.write('\n')
        pprint.pprint(newD,f,width = 170)
        pprint.pprint(failedList, f)
        #f.write(str(newL))
        f.write('\n\n')
        f.close()     

    def sleep(flag = 0):
        if flag == 0:
            nowTime = int(time.time())
            startTime = 1800 * int(nowTime / 1800 + 1) + 180
            sleepTime = startTime - nowTime
            for i in range(0 , len(D['result']['voteGroups'])):
                dictName = 'Group_' + '%d' % i
                for j in range(0 , len(D['result']['voteGroups'][i]['characters'])):
                    formerAllVotes = newD[dictName][j]['allVotes']
                    newD[dictName][j]['allVotes'] = newD[dictName][j]['trueLove'] * 2 + newD[dictName][j]['generalVotes']
                    newD[dictName][j]['deltaVotes'] = newD[dictName][j]['allVotes']-formerAllVotes
            putOut()
            print(sleepTime)
            time.sleep(sleepTime)
        if flag == 1:
            day=time.strftime('%Y%m%d',time.localtime())
            if day >= '20170826':
                runFlag = 0
            else:
                nowTime = int(time.time())
                startTime = 3600 * int(nowTime / 3600 + 1) + 180
                sleepTime = startTime - nowTime
                for i in range(0 , len(D['result']['voteGroups'])):
                    dictName = 'Group_' + '%d' % i
                    for j in range(0 , len(D['result']['voteGroups'][i]['characters'])):
                        formerAllVotes = newD[dictName][j]['allVotes']
                        newD[dictName][j]['allVotes'] = newD[dictName][j]['trueLove'] * 2 + newD[dictName][j]['generalVotes']
                        newD[dictName][j]['deltaVotes'] = newD[dictName][j]['allVotes']-formerAllVotes
                putOut()
                print(sleepTime)
                time.sleep(sleepTime)
   
    def afterSleep(page,newLFlag):
        url = 'http://bangumi.bilibili.com/moe/2017/2/api/realtime/votes?page='+'%d' % (page)+'&pagesize=50'
        print(url)
        header = fake_headers[random.randint(0, 3)]
        req = request.Request(url, headers = header)
        vote = request.urlopen(req).read()
        vote = vote.decode('utf-8')
        vote_dict = json.loads(vote)


        if vote_dict['result'] != []:
            voteAdd(newLFlag, len(vote_dict['result']), vote_dict)
    
    allList = range(1, 20000)
    global failedList
    failedList = []


    for i in allList:
        while True:
            times = 0
            url = 'http://bangumi.bilibili.com/moe/2017/2/api/realtime/votes?page='+'%d' % (i)+'&pagesize=50'
            print(url)
            header = fake_headers[int(time.time())%4]
            req = request.Request(url, headers = header)
            try:   
                vote = request.urlopen(req).read()
            except:
                print('failed')
                failedList.append(i)
            vote = vote.decode('utf-8')
            vote_dict = json.loads(vote)
            times += 1
            if vote_dict['code'] == 0:
                break
            else:
                time.sleep(5 * random.random())
            if times > 10:
                i += 1
                failedList.append(i)


        #newLFlag = 0
        startPosition = 0
        endPosition = 50

    
        if vote_dict['result'] != []:
            if len(vote_dict['result']) == 50:
                voteAdd(startPosition, endPosition, vote_dict)
            else:
                endPosition = len(vote_dict['result'])   
                voteAdd(startPosition, endPosition, vote_dict)
                if time.strftime('%H%M%S',time.localtime()) <= '230000':
                   sleep()
                   afterSleep(i, endPosition)
                else:break
        else:
            if time.strftime('%H%M%S',time.localtime()) <= '230000':
                sleep()
                endPosition = 0
                afterSleep(i, endPosition)
            else:break

    sleep(1)