#-*- coding:utf-8 -*-#
import re
import os
import sys
import time
import tkinter
import pprint

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
root.geometry('1000x600')
root.resizable(width=True, height=True)
#lable = tkinter.Label(root, text = dirNameList)
#lable.pack()
l = tkinter.Label(root, text="show", font=("Arial", 20), width=5, height=50)
l.place(x = 10, y = 10)  #这里的side可以赋值为LEFT  RTGHT TOP  BOTTOM

root.mainloop()