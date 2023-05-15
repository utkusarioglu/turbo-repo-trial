import CustomButton from "ui/src/CustomButton";
import CustomHeader from "ui/src/CustomHeader";
import CustomInput from "ui/src/CustomInput";
import { Spacer, YStack, XStack } from "ui";

const HomeScreen = () => {
  return (
    <YStack>
      <CustomHeader>Hi</CustomHeader>
      <CustomInput />
      <Spacer />
      <XStack>
        <CustomButton />
        <Spacer />
        <CustomButton />
        <Spacer />
        <CustomButton />
      </XStack>
    </YStack>
  );
};

export default HomeScreen;
