import { Text, Container, HStack, Image, Button} from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Container
      background="linear-gradient(to right,maroon,black)"
      maxW="container.2xl"
      margin="auto"
    >
      <HStack
        margin="auto"
        p="1rem"
        justifyContent="space-between"
        width="95%"
        >
        <Image src={"logo.png"} />
        <HStack
        spacing={10}
        >
          <Text
            _hover={{ color: "white" }}
            color="grey"
            fontWeight={300}
            fontSize="1.2rem"
            variant="ghost"
          >
            Fitness
          </Text>
          <Text
            _hover={{ color: "white" }}
            color="grey"
            fontWeight={300}
            fontSize="1.2rem"
            variant="ghost"
          >
            Nutrition
          </Text>
          <Text
            _hover={{ color: "white" }}
            color="grey"
            fontWeight={300}
            fontSize="1.2rem"
            variant="ghost"
          >
            Gyms
          </Text>
          <Text
            _hover={{ color: "white" }}
            color="grey"
            fontWeight={300}
            fontSize="1.2rem"
            variant="ghost"
          >
            Become WTF Partner
          </Text>
          <Text
            _hover={{ color: "white" }}
            color="grey"
            fontWeight={300}
            fontSize="1.2rem"
            variant="ghost"
          >
            About Us
          </Text>
          <Button
            _hover={{ color: "white" }}
            color="white"
            fontWeight={300}
            fontSize="1.2rem"
            colorScheme="red"
          >
            Login
          </Button>
        </HStack>
      </HStack>
    </Container>
  );
};
