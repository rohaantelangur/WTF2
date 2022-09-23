import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { getdata } from "../Redux/GYMDetail/action";
import { Footer } from "./Footer";

const bgcolour = {
  0: "linear-gradient(to right, #6eae80, #649f75, #5b906a, #52815f, #497355);",
  1: "linear-gradient(to right, #b77799, #a7698a, #975c7b, #874f6d, #78425f);",
  2: "linear-gradient(to right, #931817, #9b2220, #a32b29, #ab3432, #b33c3b);",
  3: "linear-gradient(to right, #3e75b1, #31639c, #245188, #154074, #043060);",
  4: "linear-gradient(to right, #6eae80, #649f75, #5b906a, #52815f, #497355);",
  5: "linear-gradient(to right, #b77799, #a7698a, #975c7b, #874f6d, #78425f);",
  6: "linear-gradient(to right, #931817, #9b2220, #a32b29, #ab3432, #b33c3b);",
  7: "linear-gradient(to right, #3e75b1, #31639c, #245188, #154074, #043060);",
};
export const GymDetail = () => {
  const [coverImage, setCoverImage] = useState(
    "https://source.unsplash.com/random/900×700/?gym"
  );
  const { user_id } = useParams();
  const [curr, setcurr] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailReducer.data);
  const data2 = useSelector((state) => state.AppReducer.data);
  const [isLargerThan] = useMediaQuery("(min-width: 1200px)");
  console.log(data);

  useEffect(() => {
    dispatch(getdata(user_id));
    let temp = data2.find((el) => {
      return el.user_id == user_id;
    });
    setcurr(temp);
  }, []);

  useEffect(() => {
    let temp = data2.find((el) => {
      if (el?.cover_image) {
        setCoverImage(el.cover_image);
      }
      return el.user_id == user_id;
    });
    setcurr(temp);
  }, [user_id]);

  return (
    <Container maxW="LARGE" margin="auto" bg={"black"} p={0}>
      <Box width={"100%"}>
        <Image margin="auto" height="500px" width="100%" src={coverImage} />
      </Box>
      <Container
        p="5rem"
        color="white"
        display="flex"
        justifyContent="space-between"
        maxW="container.2xl"
      >
        <Stack spacing="auto" color="white" width="50%">
          <Heading p="1rem" color="white">
            {curr?.gym_name}
          </Heading>
          <HStack
            color="white"
            backgroundColor="none"
            p="1rem"
            fontSize="larger"
          >
            <Text textAlign="center" backgroundColor="none">
              {curr?.address2}
            </Text>
            <Text textAlign="center" backgroundColor="none">
              {curr?.adddress1}
            </Text>
            <Text textAlign="center" backgroundColor="none">
              {curr?.city}
            </Text>
          </HStack>
          <Stack p="2rem">
            <Heading fontWeight={400} color="white">
              Description
            </Heading>
            <Text fontSize="large" color="white">
              {curr?.description ? curr?.description : "Best Gym"}
            </Text>
          </Stack>
          <Stack p="2rem">
            <Heading fontWeight={400} color="white">
              Facilities
            </Heading>
            <HStack spacing={6}>
              <Stack>
                <Box
                  width="8rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    AC
                  </Text>
                </Box>
              </Stack>
              <Stack>
                <Box
                  width="8rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    Parking
                  </Text>
                </Box>
              </Stack>
            </HStack>
          </Stack>

          <Stack p="2rem">
            <Heading fontWeight={400} color="white">
              Why to choose WTF?
            </Heading>
            <HStack spacing={6}>
              <Stack>
                <Box
                  width="10rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    Earn WTF rewards coin
                  </Text>
                </Box>
              </Stack>

              <Stack>
                <Box
                  width="10rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    Fully vaccinated Staff
                  </Text>
                </Box>
              </Stack>

              <Stack>
                <Box
                  width="10rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    Track Fitness Journey
                  </Text>
                </Box>
              </Stack>

              <Stack>
                <Box
                  width="10rem"
                  height="5rem"
                  borderRadius={"10px"}
                  background="#920909"
                >
                  <Text fontSize="large" p="1rem" textAlign="center">
                    Pocket Friendly Membership
                  </Text>
                </Box>
              </Stack>
            </HStack>
          </Stack>

          <Stack p="2rem" spacing={10}>
            <Heading fontWeight={400} color="white">
              How it works
            </Heading>
            <HStack>
              <Image height="5rem" src="/boy.png" />
              <Text fontSize="large">
                Pick membership start date and complete your ubscription process
                by clicking Buy Now below{" "}
              </Text>
            </HStack>
            <HStack>
              <Image height="5rem " src="/boy.png" />
              <Text fontSize="large" textAlign="center">
                A dedicated general trainer will be assigned after you have
                taken your subscription
              </Text>
            </HStack>
            <HStack>
              <Image height="5rem" src="/boy.png" />
              <Text fontSize="large" textAlign="center">
                Explore WTF and start your fitness journey{" "}
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Box p="1rem" width="40%" color="white">
          <Button
            height="5rem"
            width="10rem"
            right={0}
            position="absolute"
            mr="2rem"
            background="#920909"
          >
            {curr?.rating} Rating
          </Button>

          {isLargerThan && (
            <Container
              backgroundColor="darkgrey"
              mt="10rem"
              borderRadius={"1rem"}
              py="5"
              maxW="container.2xl"
            >
              <Heading
                fontWeight={400}
                p="2rem"
                backgroundColor="darkgrey"
                color="white"
              >
                Choose Membership
              </Heading>

              {data?.map((item, index) => (
                <Box
                  backgroundImage={bgcolour[index]}
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius="1rem"
                >
                    <Text fontSize="large"  textAlign="left" m="1rem 0rem 0rem 1.5rem" pt="1rem">
                      PLAN {index + 1}{" "}
                    </Text>
                  <HStack key={item.index} spacing="auto"  p="1rem">

                    <Image width="3rem" src={"/LOGOWHITE.png"} />
                    <Text fontSize="large" fontWeight={700}>
                      {item.plan_name}
                    </Text>
                    <Tag
                      backgroundImage={bgcolour[index]}
                      p={2}
                      fontSize="large"
                      color="white"
                    >
                      ₹. {item.original_price}
                    </Tag>
                  </HStack>
                </Box>
              ))}
            </Container>
          )}
        </Box>
      </Container>

      {!isLargerThan && (
        <Container
          backgroundColor="darkgrey"
          mt="1rem"
          borderRadius={"1rem"}
          py="5"
          width={"90%"}
        >
          <Heading
            fontWeight={400}
            p="2rem"
            backgroundColor="darkgrey"
            color="white"
          >
            Choose Membership
          </Heading>

          {data?.map((item, index) => (
            <Box
            backgroundImage={bgcolour[index]}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="1rem"
          >
              <Text fontSize="large"  textAlign="left" m="1rem 0rem 0rem 1.5rem" pt="1rem">
                PLAN {index + 1}{" "}
              </Text>
            <HStack key={item.index} spacing="auto"  p="1rem">

              <Image width="3rem" src={"/LOGOWHITE.png"} />
              <Text fontSize="large" fontWeight={700}>
                {item.plan_name}
              </Text>
              <Tag
                backgroundImage={bgcolour[index]}
                p={2}
                fontSize="large"
                color="white"
              >
                ₹. {item.original_price}
              </Tag>
            </HStack>
          </Box>
          ))}
        </Container>
      )}

      <Container
        p="8rem"
        display="flex"
        justifyContent="space-around"
        margin="auto"
        maxW="container.2xl"
      >
        <Button width="15rem" height="5rem" colorScheme="red">
          Book Now
        </Button>
        <Button width="15rem" height="5rem" colorScheme="red" variant="outline">
          Book 1 Day Free Session
        </Button>
      </Container>
      <Footer />
    </Container>
  );
};
