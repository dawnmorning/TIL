#문자열 처리 함수

gumi = "Gumi is hot weather"
print(gumi.lower())
print(gumi.upper())
print(gumi[0].isupper()) #구미에 있는 첫번째 값이 대문자인가?
print(len(gumi))
print(gumi.replace("Gumi", "Daegu"))
index = gumi.index("h") #gumi에서 h이 몇번째 위치인가?
print(index)

print(gumi.find(",Daegu")) #문자가 없을시 -1
print(gumi.count("h")) #gumi에서 h가 몇번 나왔는가?
