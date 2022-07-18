score = {
'python': 85,
'django': 89,
'web': 83,
'algorithm' : 90,
}
print(score)
total = score['python'] + score['django'] + score['web'] + score['algorithm']
length = len(score)
average = total / length
print(average)