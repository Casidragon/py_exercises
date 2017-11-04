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
global pauseState
global indexEnd
global index
global imgLabel
global img  #我不知道为什么，但不加这一句一定没有图片，我试了3个小时。。。
global randomNum
global filesName


index = 0
indexEnd = 0
pauseState = 0
nowTime = 60.0
comboboxNum = 0
dirNameList = []
filesNameList = []


def comboboxChange(event):
    global indexEnd
    global pauseState
    global index
    index = 600
    indexEnd = 1 #切换combobox时，视为601个index已遍历
    pauseState = 0
    buttonStart["state"] = 'normal'

def getDirName():
    global dirNameList
    global filesNameList
    i = 0;
    for root, dirNameList, files in os.walk(".",topdown = False):
        filesNameList.append(files)

def showAnswer():
    global randomNum
    global filesName
    #filesName = filesNameList[comboboxNum][randomNum]
    answerLabel["text"] = filesName.split('.')[0]
    
def countDown():
    global nowTime
    global index
    global indexEnd
    global pauseState
    global img
    global randomNum
    #if pauseState == 0:
    #dirPath = path + os.sep + dirNameList[comboboxNum] + os.sep
    #imgNum = len(filesNameList[comboboxNum])
    #randomNum = random.randint(1, imgNum) - 1
    #filesName = filesNameList[comboboxNum][randomNum]
    #imgPath = dirPath + filesName
    #image()
    if index < 600:
        root.after(100, countDown)
        indexEnd = 0
        #if pauseState == 1: root.after(1000, countDown)
    else: indexEnd = 1
    #print(index)
    nowTime = Decimal('60.0') - Decimal('0.1') * index
    timeCounterLabel["text"] = str(nowTime)

    index += 1
    
    #if pauseState == 1: root.after(1000, countDown) 

def pause():
    global pauseState
    global indexEnd
    buttonStart["state"] = 'normal'
    pauseState = 1
    #indexEnd = 0

def start():
    global comboboxNum
    global dirPath
    global imgNum 
    global pauseState
    global indexEnd
    global index
    buttonStart["state"] = 'disabled'
    comboboxNum = dropList.current()
    
    if pauseState == 0:  #不处于暂停状态
        index = 0
        countDown()
    
    if pauseState == 1:
        pauseState = 0   #解除暂停状态
    image()
    #if pauseState == 1:
    #   pauseState = 1 #question
    answerLabel["text"] = ''
    
getDirName()

root = tkinter.Tk()
root.title('学情考察软件')
root.geometry('1120x650')
root.resizable(width=True, height=True)

#下标
tkinter.Label(root, text="东南大学能源与环境学院", font=("Arial", 12)).place(relx = 0.8, rely = 0.9, anchor = 'nw')

#listbox
listBox=tkinter.Listbox(root)
for item in dirNameList:
    listBox.insert(1,item)

#button
buttonStart = tkinter.Button(root, text = "开始",font=("Microsoft YaHei", 8), width = 20, height = 2, command = start)
buttonStart.place(relx = 0.8, rely = 0.13, anchor = 'nw')

buttonPause = tkinter.Button(root, text = "暂停",font=("Microsoft YaHei", 8), width = 20, height = 2, command = pause)
buttonPause.place(relx = 0.8, rely = 0.21, anchor = 'nw')

buttonShowAnswer = tkinter.Button(root, text = "显示答案",font=("Microsoft YaHei", 8), width = 20, height = 2, command = showAnswer)
buttonShowAnswer.place(relx = 0.8, rely = 0.29, anchor = 'nw')

buttonExit = tkinter.Button(root, text = "退出", font=("Microsoft YaHei", 8), width = 20, height = 2, command = quit)
buttonExit.place(relx = 0.8, rely = 0.37, anchor = 'nw')

#combobox
dropList = tkinter.ttk.Combobox(root, font=("Microsoft YaHei", 8), width = 28, value = dirNameList)
dropList.place(relx = 0.53, rely = 0.16, anchor = 'nw')
dropList.bind("<<ComboboxSelected>>", comboboxChange)

#image
def image():
    global img
    global filesName
    if pauseState == 0 and indexEnd == 0:
        dirPath = path + os.sep + dirNameList[comboboxNum] + os.sep
        imgNum = len(filesNameList[comboboxNum])
        randomNum = random.randint(1, imgNum) - 1
        filesName = filesNameList[comboboxNum][randomNum]
        imgPath = dirPath + filesName
        imgPIL = Image.open(imgPath).resize((410,600))
        img = ImageTk.PhotoImage(imgPIL)
        imgLabel = tkinter.Label(root, image = img, width = 410, height = 600)
        imgLabel.place(relx = 0.03, rely = 0.03, anchor = 'nw')
        root.after(100, image)
    #if pauseState == 1:
        

#timecounterLabel
timeCounterLabel = tkinter.Label(root,text = nowTime, font=("Microsoft YaHei", 40))
timeCounterLabel.place(relx = 0.56, rely = 0.76, anchor = 'nw')

#answerLabel
answerLabel = tkinter.Label(root,text = "", font=("Microsoft YaHei", 15), width = 20, justify = tkinter.CENTER, wraplength = 200)
answerLabel.place(relx = 0.5, rely = 0.4, anchor = 'nw')

root.mainloop()