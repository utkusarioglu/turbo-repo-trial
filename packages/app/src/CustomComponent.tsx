import CustomButton from "ui/src/CustomButton";
import CustomHeader from "ui/src/CustomHeader";
import CustomInput from "ui/src/CustomInput";
import { Spacer, YStack, XStack } from "ui";

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
