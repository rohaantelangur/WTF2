import { Box, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillFileCheckFill } from "react-icons/bs";
import { CgCircleci } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { MdSanitizer } from "react-icons/md";

export const SubFooter = () => {
  return (
    <Container
      mt="5rem"
      pt="5rem"
      maxW="container.2xl"
      heigth="20rem"
      backgroundImage="linear-gradient(to right,red,#CB3838)"
    >
      <HStack spacing="auto" background="none">
        <Stack background="none">
          <Heading color="white" background="none">
            WTF FITNESS EXPERIENCE?
          </Heading>
          <HStack height="100%" background="none">
            <Box background="#FB5E5E" height="10rem" width="5rem"></Box>
            <Heading color="white" background="none">
              @ your regular gym cost
            </Heading>
          </HStack>
        </Stack>
        <HStack color="white" spacing={6} p="2rem" background="none">
          <Box
            cursor="pointer"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            background="#CB3838"
            height="10rem"
            width="10rem"
          >
            <Stack
              p="1rem"
              height="100%"
              justifyContent="center"
              background="none"
            >
              <Text background="none" margin="auto">
                <CgCircleci fontSize="2rem" color="white" />
              </Text>
              <Text margin="auto" textAlign="center" background="none">
                Modern Equipments
              </Text>
            </Stack>
          </Box>
          <Box
            cursor="pointer"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            background="#CB3838"
            height="10rem"
            width="10rem"
          >
            <Stack
              p="1rem"
              justifyContent="center"
              height="100%"
              background="none"
            >
              <Text background="none" margin="auto">
                <GiSkills fontSize="2rem" />
              </Text>
              <Text background="none" margin="auto" textAlign="center">
                Skilled Trainer
              </Text>
            </Stack>
          </Box>
          <Box
            cursor="pointer"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            background="#CB3838"
            height="10rem"
            width="10rem"
          >
            <Stack
              p="1rem"
              justifyContent="center"
              height="100%"
              background="none"
            >
              <Text background="none" margin="auto">
                <BsFillFileCheckFill fontSize="2rem" coolor="white" />
              </Text>
              <Text background="none" margin="auto" textAlign="center">
                To class Ambiance
              </Text>
            </Stack>
          </Box>
          <Box
            cursor="pointer"
            borderRadius="1rem"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            background="#CB3838"
            height="10rem"
            width="10rem"
          >
            <Stack
              p="1rem"
              justifyContent="center"
              height="100%"
              background="none"
            >
              <Text background="none" margin="auto">
                {<MdSanitizer color="white" fontSize="2rem" />}
              </Text>
              <Text background="none" margin="auto" textAlign="center">
                Sanitized GYMS
              </Text>
            </Stack>
          </Box>
        </HStack>
      </HStack>
    </Container>
  );
};
