#-*- coding:utf-8 -*-#
import re
import os
import sys
import time
import tkinter
import pprint
import random
from decimal import Decimal
from tkinter import ttk
from PIL import Image, ImageTk
from random import randint

def quit():
    sys.exit()

path = os.path.abspath('.')

global dirNameList
global filesNameList
global comboboxNum
global nowTime
global control
global state
global index
global imgLabel
global img  #我不知道为什么，但不加这一句一定没有图片，我试了3个小时。。。


index = 0
state = 1
control = 1
nowTime = 60.0
comboboxNum = 0
dirNameList = []
filesNameList = []


#os.walk(dirNameList)

def getDirName():
    global dirNameList
    global filesNameList
    i = 0;
    for root, dirNameList, files in os.walk(".",topdown = False):
        filesNameList.append(files)

def countDown():
    global nowTime
    global index
    global state
    global control
    global img
    if control == 1:
        dirPath = path + os.sep + dirNameList[comboboxNum] + os.sep
        imgNum = len(filesNameList[comboboxNum])
        filesName = filesNameList[comboboxNum][random.randint(1, imgNum) - 1]
        imgPath = dirPath + filesName
        
        #imgPIL = Image.open(imgPath).resize((410,600))
        #img = ImageTk.PhotoImage(imgPIL)
        image(imgPath)
        #imgLabel["image"] = img


        nowTime = Decimal('60.0') - Decimal('0.1') * index
        timeCounterLabel["text"] = str(nowTime)

        

        

        index += 1
        if index < 601:
            root.after(100, countDown)
            if control == 0: root.after(1000, countDown)
        else: state = 1
    else: root.after(1000, countDown)

        

def pause():
    global control
    global state
    control = 0
    state = 0

def start():
    global comboboxNum
    global dirPath
    global imgNum 
    global control
    global state
    global index
    if state == 1:
        index = 0
        comboboxNum = dropList.current()
        #print(comboboxNum)
        #dirPath = path + os.sep + dirNameList[comboboxNum] + os.sep
        #imgNum = len(filesNameList[comboboxNum])
        #filesName = filesNameList[comboboxNum][random.randint(0, imgNum - 1)]
        #imgPath = dirPath + filesName
        #image('H:\py_exercises\学情考察软件\学情考察软件\曹人春，江西吉安，不在前三分之二.jpg')
        #image()
        countDown()
        #image()
        #print(dirPath)
        #print(imgNum)
    if state == 0:
        control = 1
    


getDirName()
#pprint.pprint(dirNameList)
#pprint.pprint(filesNameList)

root = tkinter.Tk()
root.title('学情考察软件')
root.geometry('1120x650')
root.resizable(width=True, height=True)


#下标
tkinter.Label(root, text="东南大学电气工程学院", font=("Arial", 12)).place(relx = 0.8, rely = 0.9, anchor = 'nw')



#listbox
listBox=tkinter.Listbox(root)
for item in dirNameList:
    listBox.insert(1,item)

#button
buttonStart = tkinter.Button(root, text = "开始",font=("Microsoft YaHei", 8), width = 20, height = 2, command = start).place(relx = 0.8, rely = 0.13, anchor = 'nw')
buttonPause = tkinter.Button(root, text = "暂停",font=("Microsoft YaHei", 8), width = 20, height = 2, command = pause).place(relx = 0.8, rely = 0.21, anchor = 'nw')
buttonShowAnswer = tkinter.Button(root, text = "显示答案",font=("Microsoft YaHei", 8), width = 20, height = 2).place(relx = 0.8, rely = 0.29, anchor = 'nw')
buttonExit = tkinter.Button(root, text = "退出", font=("Microsoft YaHei", 8), width = 20, height = 2, command = quit).place(relx = 0.8, rely = 0.37, anchor = 'nw')


#combobox
dropList = tkinter.ttk.Combobox(root, font=("Microsoft YaHei", 8), width = 28, value = dirNameList)
dropList.place(relx = 0.53, rely = 0.16, anchor = 'nw')

#image
def image(imgPath):
    #global imgLabel
    global img
    #dirPath = path + os.sep + dirNameList[1] + os.sep
    #imgNum = len(filesNameList[1])
    #filesName = filesNameList[1][int(index / 6)]
    #imgPath = dirPath + filesName
    #imgPIL = Image.open('H:\\py_exercises\\学情考察软件\\学情考察软件\\信息学院王婧菲\\俞安澜+河北秦皇岛+前三分之一.jpg').resize((410,600))
    imgPIL = Image.open(imgPath).resize((410,600))
    img = ImageTk.PhotoImage(imgPIL)
    imgLabel = tkinter.Label(root, image = img, width = 410, height = 600)
    #imgLabel["image"] = img
    #imgLabel.pack(side = "left", expand = "no", ipadx = 20)
    imgLabel.place(relx = 0.03, rely = 0.03, anchor = 'nw')
    
    #root.update()
    




#timecounterLabel
timeCounterLabel = tkinter.Label(root,text = nowTime, font=("Microsoft YaHei", 40))
timeCounterLabel.place(relx = 0.56, rely = 0.76, anchor = 'nw')

#answerLabel
answerLabel = tkinter.Label(root,text = "曹人春，江西吉安，不在前三分之二", font=("Microsoft YaHei", 15), width = 20, justify = tkinter.CENTER, wraplength = 200)
answerLabel.place(relx = 0.5, rely = 0.4, anchor = 'nw')


root.mainloop()