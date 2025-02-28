import { Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/legacy/image";
import React from "react";

interface LogoComponentProps {}

const width = 100;
const height = 100;

const LogoComponent: React.FC<LogoComponentProps> = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex>
      <Flex
        w={`${width}px`}
        h={`${height}px`}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`/assets/logo/logo-text-${
            colorMode === "light" ? "light" : "dark"
          }.png`}
          alt="Hansa Dewmina Dark Logo"
          width={width}
          height={height}
          layout="intrinsic"
        />
      </Flex>
      <Text
        animation="glowing 5000ms infinite"
        fontSize="10px"
        verticalAlign="sub"
      >
        Hansa Dewmina
      </Text>
    </Flex>
  );
};

export default LogoComponent;
