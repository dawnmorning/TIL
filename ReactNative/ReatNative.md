<aside>
👯‍♀️ **강의 내용 정리**

</aside>

- props를 받아와서 최상위 부모 컴포넌트에 데려오기
- countryNumber와 phoneNumber를 가져와서 post 해주어야 했다.

```tsx
const [countryNumber, setCounryNumber] = useState<string | null>(null);
const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const onPressPostNumber = () => {
    if (countryNumber && phoneNumber) {
      postLogin({ countryNumber, phoneNumber }).catch((error) => {
        console.log(error);
      });
    }
  };
  return (
        <CustomInput
          name="username"
          placeholder="123456789"
          control={control}
          rules={{ required: "Please enter your phone" }}
                    // 함수를 통해 변수값에 저장할 수 있도록 내려주었다.
                    // CustomInput 안에 국가 번호 input과 전화번호 input이 있다.
          onCountryNumberChange={setCounryNumber}
          onPhoneNumberChange={setPhoneNumber}
        />
        <CustomButton
          text={loading ? "Loading..." : "Next"}
          active={true}
          // onPress={[onSubmit(onSignInPressed), movePermission]
          onPress={onPressPostNumber}
        />
```

- CustomInput에서 값들을 저장하자.

- Controller는 폼 검증을 위해 필요한 것이라고 한다.

- InputForLogin에 필요한 props들을 적어주고, 해당 타입에 대한 명시를 해준다.

- 함수명 : (받아 갈 변수) ⇒ void 타입

- 각자 담을 함수를 만든다
  
  - `// 국가 코드 변경 처리
    const handleCountryNumberChange = (value: string) => {
      onCountryNumberChange(value);
    };
    
    // 전화번호 변경 처리
    const handlePhoneNumberChange = (text: string) => {
      onPhoneNumberChange(text);
    };`

- CountryNumberpick과 TextInput에 배치한다.

- CountryNubmerPick은 한번 더 내려가서 props에 지정하고 onValueChange()에 저장한다.

```tsx
const InputForLogin = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  style,
  onCountryNumberChange,
  onPhoneNumberChange,
}: {
  control: Control<FieldValues, any>;
  name: string;
  rules: any;
  placeholder: string;
  secureTextEntry?: any;
  style?: StyleProp<any>;
  onCountryNumberChange: (value: string) => void;
  onPhoneNumberChange: (text: string) => void;
}) => {
  // 국가 코드 변경 처리
  const handleCountryNumberChange = (value: string) => {
    onCountryNumberChange(value);
  };

  // 전화번호 변경 처리
  const handlePhoneNumberChange = (text: string) => {
    onPhoneNumberChange(text);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
              style,
            ]}
          >
            <CountryNumberPick
              style={styles.countrypicker}
              onValueChange={handleCountryNumberChange}
            />
            <TextInput
              value={value}
              onChangeText={(text) => {
                onChange(text);
                handlePhoneNumberChange(text);
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              autoCapitalize={"none"}
              keyboardType="numeric"
            />
```

---

# 0428 JWT & 인터셉터

<aside>
👯‍♀️ **강의 내용 정리**

</aside>

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from "react-native-config";

async function getAccessToken(req?: any): Promise<string | null> {
  const token = await AsyncStorage.getItem("accessToken");
  return token;
}

async function getRefreshToken(req?: any): Promise<string | null> {
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  return refreshToken;
}

async function saveAccessToken(token: string): Promise<void> {
  await AsyncStorage.setItem("accessToken", token);
}

async function getNewAccessToken(
  refreshToken: string
): Promise<string | null | undefined> {
  try {
    const response = await axios.post(
      `${Config.API_URL}/user/token-reissurance`,
      {
        refreshToken,
      }
    );
    if (response.data && response.data.accessToken) {
      await saveAccessToken(response.data.accessToken);
      return response.data.accessToken;
    }
  } catch (error) {
    console.error("Error requesting new access token: ", error);
    return null;
  }
}
```

- 액세스토큰, 리프레시 토큰, 액세스 토큰이 만료되었을 때 헤더에 리프레시 토큰을 담아서 다시 저장할 함수를 만든다.

```jsx
function defaultInstance(req?: any) {
  const instance = axios.create({
    baseURL: Config.API_URL,
    headers: {
      "Content-Type": "application/JSON;charset=utf-8",
    },
  });

  // 인터셉터를 사용하여 자동으로 accessToken을 header에 추가하고, 만료되면 refreshToken을 헤더에 추가.
  instance.interceptors.request.use(async (config) => {
    const token = await getAccessToken(req);
    if (token) {
      config.headers["X-ACCESS-TOKEN"] = token;
    }

    const refreshToken = await getRefreshToken(req);
    if (refreshToken) {
      config.headers["X-REFRESH-TOKEN"] = refreshToken;
    }
    return config;
  });

  // 응답 인터셉터 추가: 액세스 토큰이 만료되면 리프레시 토큰을 사용하여 새 액세스 토큰을 얻어옴
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 || error.response.status === 400 ) {

        const refreshToken = await getRefreshToken();
        if (refreshToken) {
          const newAccessToken = await getNewAccessToken(refreshToken);
          if (newAccessToken) {
            originalRequest.headers["X-ACCESS-TOKEN"] = newAccessToken;
            return instance(originalRequest);
          }
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export const defaultAxios = defaultInstance();
```

---

## Microphone 설정

**`react-native-permissions`** 패키지는 앱에서 사용하는 권한에 대한 액세스를 요청하고 확인하는 데 사용됩니다. 하지만 "알림" 권한의 경우 iOS와 Android 모두에서 직접적인 지원이 없습니다. 따라서 **`react-native-permissions`**을 사용하여 알림 권한을 직접 요청할 수는 없습니다.

대신 **`react-native-push-notification`** 또는 **`@react-native-firebase/messaging`** 패키지를 사용하여 알림 권한 요청을 처리하는 것이 좋습니다.



---

### Server Sent Event(SSE)



```tsx
const [count, setCount] = useState<number>(0);

  const handleConnect = () => {
    const sse = new EventSourcePolyfill(
      `https://k8s102.p.ssafy.io/fcm/connect/1`
    );
    console.log(sse);
    console.log("----------");

    // 연결이 되었을 때 받는 메시지
    sse.addEventListener("connect" as EventType, (e: any) => {
      const receivedConnectData = e.data;
      console.log("connect event data: ", receivedConnectData);
    });

    // 이벤트가 발생 되었을 시 메시지
    sse.addEventListener("count" as EventType, (e: any) => {
      const receivedCount = e.data;
      console.log("count event data", receivedCount);
      setCount(receivedCount);
    });
    sse.addEventListener("error" as EventType, (e: any) => {
      console.log("Error occurred: ", e);
    });
  };

  // 테스트용
  const handleCountClick = async () => {
    try {
      const response = await axios.post(
        `https://k8s102.p.ssafy.io/fcm/count/1`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <HeaderBack title="Settings" />
      <View>
        <Button title="connect 요청" onPress={handleConnect} />
        <Button title="count 요청" onPress={handleCountClick} />
        <Text>{count}</Text>
      </View>
    </SafeAreaView>
  );
};
```

notificaion 알람을 위한 SSE코드인데,, react에서는 잘 된다고 하는데 RN에서는 제대로 작동하지 않는다. connect가 꼐속 504 에러로 fail이 뜨고, 어쩌다가 연결이 되면 count가 쌓여서 들어온다. 나중에 해결해야겠다