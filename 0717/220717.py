# #f-string 활용법
# ment = '안녕하세요, 개발자 김종혁입니다.'
# status = '장염'
# print(f'{ment} 지금은 {status}에 걸려서 힘들어요.')


# #print(f'{} {]') 들어갈 내용을 서술하면 된다. 

# #슬라이싱

number = "010-1234-5678"

print("전화번호 뒷자리 4개 불러주세요 :" + number[7:11])
print("앞 여섯자리 : " + number[:7]) #앞 6자리 0~ 7 전까지!!
print("7자리부터 : ", number[8:])