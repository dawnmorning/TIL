def quick_sort(numbers):
    if len(numbers) <= 1 : # 숫자가 1개 이하일 때는 정렬할 필요가 없음
        return numbers

    left = []   # 기준값 보다 작은 값을 저장
    right = []  # 기준값 보다 같거나 큰 값을 저장
    pivot = numbers[len(numbers)//2]  # numbers[-1], numbers[len(numbers)//2]

    for i in range(len(numbers)):    # numbers[0] 의 경우 1,부터
        if i == (len(numbers)//2):   # numbers[-1]의 경우 len(numbers)//2 - 1
            # left나 right 리스트에 들어갈 필요 없음
            # pivot 값이 기준 값이기 때문에 비교대상으로 이미 정렬이 될 것임
            continue
        if pivot > numbers[i]:
            left.append(numbers[i])
        else:
            right.append(numbers[i])


    return quick_sort(left) + [pivot] + quick_sort(right)


numbers = [3, 2, 4, 6, 9, 1, 8, 7, 5]
print(f'정렬 전 : ',numbers)
print('---'* 10)
numbers = quick_sort(numbers)
print(f'정렬 후 : ', numbers)
