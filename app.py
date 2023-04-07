from tkinter import *

root = Tk()

class AppLication():
    def __init__(self):
        self.root = root
        self.screen()
        root.mainloop()
    def screen(self):
        self.root.title("Gerador de números")
        self.root.configure(background='gray')
        self.root.geometry("1024x768")
        self.root.resizable(TRUE, TRUE)
AppLication()