import { type FC, type ReactNode } from "react";
import { Button } from "tamagui";
import { useLink } from "solito/link";

type CustomButtonProps = Partial<Parameters<typeof Button>>[0] & {
  children: ReactNode;
  userId: number; // int
};

const CustomButton: FC<CustomButtonProps> = ({ children, userId, ...rest }) => {
  const link = useLink({ href: `/user/${userId}` });
  return (
    <Button onPress={() => link.onPress()} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
