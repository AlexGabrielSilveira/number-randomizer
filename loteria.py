import random 

numeros = int(input('quantos números você deseja apostar ?'))


for n in range(numeros):
    print(random.randint(0, 99))
