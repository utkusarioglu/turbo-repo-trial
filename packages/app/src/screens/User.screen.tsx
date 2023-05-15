import CustomHeader from "ui/src/CustomHeader";
import { YStack, Text, Button } from "ui";
import { createParam } from "solito";
import { useLink } from "solito/link";

const { useParam } = createParam();

const CustomComponent = () => {
  const homeLink = useLink({ href: "/home" });
  const userId = useParam("userId");
  return (
    <YStack>
      <CustomHeader>Users</CustomHeader>
      <Text>User id is: {userId}</Text>
      <Button onPress={() => homeLink.onPress()}>Home</Button>
    </YStack>
  );
};

export default CustomComponent;
