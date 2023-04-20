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