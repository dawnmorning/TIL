next.js에 api 적용을 하기 위해 이것저것 검색을 하다가 CRA와는 다른 점을 또 찾아냈다.

.env에 환경변수 등록을 통해 api 조회를 할 수 있다는 것을 우리는 알고 있다.

.env 파일에서 REACTAPP 접두어를 사용하면, Create React App에서 환경 변수로 인식합니다. 이렇게 작성하면, process.env.REACT_APP_API_BASE_URL과 같이 사용할 수 있습니다.

하지만 Next.js에서는 REACT_APP_ 접두어를 인식하지 않습니다. Next.js에서는 NEXT_PUBLIC_ 접두어를 사용하여 공개 환경 변수로 설정해야 합니다. 따라서 Next.js에서는 .env.local 파일에서 NEXT_PUBLIC_API_BASE_URL=""와 같이 작성해야 합니다.

위와 같이 작성하면, process.env.REACT_APP_API_BASE_URL 또는 process.env.NEXT_PUBLIC_API_BASE_URL와 같이 환경 변수를 참조할 수 있습니다.

여기서, NEXTPUBLIC 접두사를 사용하면 해당 환경 변수를 클라이언트 사이드에서도 사용할 수 있게 됩니다. 이 환경 변수를 코드에서 사용하려면 다음과 같이 작성할 수 있습니다

// 예를 들어, index.tsx 파일에서
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/your-endpoint`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  // ...
}

---

## NextJs AWS에 배포하는 방법

- 앱 파일 자체를 클론해서 올려주어야 가능하다.

---

## social login 구현 완료

callback 주소 이동 -> 백에서 로직 -> 로그인 추후 코드 작성 예정

---

```typescript

```

---

## interceptor 개념에 대한 이해

---

## Media Query 사용하기



```css
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useIsClient } from "@/components/Responsive/useIsClient";

export const useIsResponsive = (): boolean[] => {
  const isClient = useIsClient();
  const isDeskTop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = true;
  const [isClientDeskTop, setIsClientDeskTop] = useState(false);
  const [isClientTablet, setIsClientTablet] = useState(false);
  const [isClientMobile, setIsClientMobile] = useState(false);
  useEffect(() => {
    setIsClientDeskTop(isClient && isDeskTop);
    setIsClientTablet(isClient && !isDeskTop && isTablet);
    setIsClientMobile(isClient && !isDeskTop && !isTablet && isMobile);
  }, [isClient, isDeskTop, isTablet, isMobile]);
  return [isClientDeskTop, isClientTablet, 

isClientMobile];
};

```