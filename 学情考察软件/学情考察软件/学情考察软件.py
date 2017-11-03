#-*- coding:utf-8 -*-#
import re
import os
import sys
import time
import tkinter
import pprint
from tkinter import ttk
from PIL import Image, ImageTk

def quit():
    sys.exit()

path = os.path.abspath('.')

global dirNameList
global filesNameList

dirNameList = []
filesNameList = []


#os.walk(dirNameList)

def getDirName():
    global dirNameList
    global filesNameList
    i = 0;
    for root, dirNameList, files in os.walk(".",topdown = False):
        filesNameList.append(files)


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
buttonStart = tkinter.Button(root, text = "开始",font=("Microsoft YaHei", 8), width = 20, height = 2).place(relx = 0.8, rely = 0.13, anchor = 'nw')
buttonPause = tkinter.Button(root, text = "暂停",font=("Microsoft YaHei", 8), width = 20, height = 2).place(relx = 0.8, rely = 0.21, anchor = 'nw')
buttonShowAnswer = tkinter.Button(root, text = "显示答案",font=("Microsoft YaHei", 8), width = 20, height = 2).place(relx = 0.8, rely = 0.29, anchor = 'nw')
buttonExit = tkinter.Button(root, text = "退出", font=("Microsoft YaHei", 8), width = 20, height = 2, command = quit).place(relx = 0.8, rely = 0.37, anchor = 'nw')


#combobox
dropList = tkinter.ttk.Combobox(root, font=("Microsoft YaHei", 8), width = 28, value = dirNameList)
dropList.place(relx = 0.53, rely = 0.16, anchor = 'nw')

#image
imgPIL = Image.open("H:\py_exercises\学情考察软件\学情考察软件\曹人春，江西吉安，不在前三分之二.jpg").resize((410,600))
img = ImageTk.PhotoImage(imgPIL)
imgLabel = tkinter.Label(root, image = img, width =410, height = 600)
imgLabel.pack(side = "left", expand = "no", ipadx = 20)

#timecounterLabel
timeCounterLabel = tkinter.Label(root,text = "60.0", font=("Microsoft YaHei", 40))
timeCounterLabel.place(relx = 0.56, rely = 0.76, anchor = 'nw')

#answerLabel
answerLabel = tkinter.Label(root,text = "曹人春，江西吉安，不在前三分之二", font=("Microsoft YaHei", 15), width = 20, justify = tkinter.CENTER, wraplength = 200)
answerLabel.place(relx = 0.5, rely = 0.4, anchor = 'nw')


root.mainloop()