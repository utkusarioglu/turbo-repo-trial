import CustomButton from "__ui/CustomButton";
import CustomHeader from "__ui/CustomHeader";
import CustomInput from "__ui/CustomInput";
import { Spacer, YStack, XStack } from "__ui";

const CustomComponent = () => {
  return (
    <YStack>
      <CustomHeader text="Web" />
      <CustomInput />
      <Spacer />
      <XStack>
        <CustomButton />
        <Spacer />
        <CustomButton />
      </XStack>
    </YStack>
  );
};

export default CustomComponent;
