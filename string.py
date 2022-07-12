readfile = open("text.txt", "r", encoding='utf-8')
listPass = []
for line in readfile:
    string = line
    indexPass = string.index(': ')
    lastIndex = string.rindex('\n')
    #print(lastIndex)
    print(string[indexPass+2:lastIndex])
    




