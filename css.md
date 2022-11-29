## realtive
- 원래 있어야할 위치를 기준으로 얼만큼 움직일 수 있는지를 지정하기 위한 position
## absolute
- 부모 클래스의 위치를 기준으로 얼만큼 움직일 수 있는지를 지정하기 위한 position
- DOM 트리를 따라 올라가다가 position 속성이 static이 아닌 첫 번째 상위 요소가 해당 요소의 배치 기준으로 설정됨
- 대부분의 경우, 부모 요소(가장 가까운 상위 요소)를 기준으로 top, left, bottom, right 속성을 적용해야하기 때문입니다. 따라서 어떤 요소의 display 속성을 absolute로 설정하면, 부모 요소의 display 속성을 relative로 지정해주는 것이 관례입니다.  
- 만약에 해당 요소 상위에 position 속성이 static이 아닌 요소가 없다면, DOM 트리에 최상위에 있는 <body> 요소가 배치 기준이 됩니다.