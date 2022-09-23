import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getdata, getdatabycity } from "../Redux/App/action";
import { ImLocation } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import "antd/dist/antd.css";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Menu, Dropdown } from "antd";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SubFooter } from "../components/SubFooter";

export const Gym = () => {
  const [star, setStar] = useState(Array(5).fill(1));
  const [isGIF, setIsGIF] = useState(true);
  const [filter, setFilter] = useState("");
  // const [location, setlocation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setcity] = useState(null);
  const data = useSelector((state) => state.AppReducer.data);
  const [searchinpage, setsearchinpage] = useState("");
  const [seacheddata, setsearcheddata] = useState(null);
  console.log(data)
  useEffect(() => {
    if (!searchinpage) {
      setsearcheddata([]);
    } else {
      let newlistofsuggestions = data
        ?.filter((item) =>
          item.gym_name?.toLowerCase().indexOf(searchinpage) !== -1
            ? true
            : false
        )
        .map((item) => item);

      setsearcheddata(newlistofsuggestions);
    }
  }, [searchinpage, filter, city]);

  const searchInpage = (e) => {
    setsearchinpage(e.target.value);
  };

  useEffect(() => {
    dispatch(getdata());
  }, []);
  useEffect(() => {
    dispatch(getdatabycity(city));
  }, [city]);

  useEffect(() => {
    let id = setTimeout(() => {
      setIsGIF(false);
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  const options = (
    <Box bg={"black"}>
      <Menu
        style={{ backgroundColor: "#2E2E2E", width: "100%" }}
        theme="dark"
        items={[
          {
            key: "1",
            label: (
              <Button
                backgroundColor="none"
                w="100%"
                justifyContent="left"
                onClick={() => {
                  setcity("Delhi");
                }}
                _hover={{ variant: "ghost", backgroundColor: "none" }}
                variant="ghost"
                fontSize="large"
                color="white"
              >
                Delhi
              </Button>
            ),
          },
          {
            key: "2",
            label: (
              <Button
                backgroundColor="none"
                w="100%"
                justifyContent="left"
                onClick={() => {
                  setcity("New Delhi");
                }}
                _hover={{ variant: "ghost" }}
                variant="ghost"
                fontSize="large"
                color="white"
              >
                New Delhi
              </Button>
            ),
          },
          {
            key: "3",
            label: (
              <Button
                w="100%"
                justifyContent="left"
                onClick={() => {
                  setcity("Ghaziabad");
                }}
                _hover={{ variant: "ghost" }}
                variant="ghost"
                fontSize="large"
                color="white"
              >
                Ghaziabad
              </Button>
            ),
          },
          {
            key: "4",
            label: (
              <Button
                w="100%"
                justifyContent="left"
                onClick={() => {
                  setcity("Noida");
                }}
                _hover={{ variant: "ghost" }}
                variant="ghost"
                fontSize="large"
                color="white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noida
              </Button>
            ),
          },
        ]}
      />
    </Box>
  );
  if (isGIF) {
    return (
      <Container
        backgroundColor="#0D0D0D"
        maxW="container.2xl"
        top={0}
        bottom={0}
        left={0}
        right={0}
        position="fixed"
      >
        <Image
          backgroundColor="#0D0D0D"
          margin="auto"
          pt="10%"
          src="https://wtfup.me/assets/loader.gif"
        />
      </Container>
    );
  }
  return (
    <Box bg={"black"}>
      <Navbar />
      <Box width="100%">
      <Image src="GymBanner.png" />
      </Box>

      <Container maxW="container.2xl" margin="auto" p={0}>
        <InputGroup
          background="none"
          borderRadius=".5rem"
          width="90%"
          margin="auto"
          pt="1rem"
          pb="1rem"
          mt="2rem"
          border="5px solid white"
          backgroundColor="black"
        >
          <InputLeftElement
            background="none"
            pl="1rem"
            pt="1rem"
            children={
              <BsSearch fontSize="2rem" background="none" color="white" />
            }
          />
          <Input
            onChange={searchInpage}
            fontSize="larger"
            pl="4rem"
            color="white"
            variant="unstyled"
            width="90%"
            focusBorderColor="none"
            outline="none"
            placeholder="Search gym name here...."
            _placeholder={{ color: "white" }}
          />
          <InputRightElement
            background="none"
            pt="1rem"
            mr="5rem"
            children={
              <HStack background="none" spacing={6}>
                <Button colorScheme="red">
                  {
                    <ImLocation
                      background="none"
                      color="white"
                      fontSize="2rem"
                    />
                  }
                </Button>
                <Button
                  onClick={() => {
                    setcity(null);
                    setsearchinpage("");
                    dispatch(getdata());
                    setsearcheddata(data);
                  }}
                  colorScheme="red"
                >
                  Clear
                </Button>
              </HStack>
            }
          />
        </InputGroup>

        <Container
          background="none"
          display="flex"
          maxW="container.2xl"
          margin="auto"
        >
          <Stack p="3rem">
            <Heading color="white">Filters</Heading>
            <Heading color="white" fontSize="large">
              Location
            </Heading>

            <InputGroup
              borderRadius=".5rem"
              margin="auto"
              pt="1rem"
              pb="1rem"
              mt="2rem"
              border="3px solid grey"
            >
              <InputLeftElement
                pl="1rem"
                pt="1rem"
                children={<BsSearch fontSize="2rem" color="white" />}
              />
              <Input
                fontSize="larger"
                pl="4rem"
                color="white"
                variant="unstyled"
                width="90%"
                focusBorderColor="none"
                outline="none"
                placeholder="Enter Location"
                _placeholder={{ color: "white" }}
              />
            </InputGroup>
            <Heading color="white" fontSize="large">
              Price
            </Heading>
            <HStack>
              <Input
                backgroundColor="#2E2E2E"
                border="3px solid grey"
                placeholder="Min"
              />
              <Input
                backgroundColor="#2E2E2E"
                border="3px solid grey"
                placeholder="Max"
              />
            </HStack>
            <Heading color="white" fontSize="large">
              Cities
            </Heading>
            <Dropdown trigger="click" overlay={options} placement="bottomRight">
              <Button
                border="3px solid grey"
                justifyContent="left"
                backgroundColor="#2E2E2E"
                _hover={{ backgroundColor: "#2E2E2E" }}
                color="white"
              >
                {city?.length > 0 ? city : "Select City"}
              </Button>
            </Dropdown>
          </Stack>

          {seacheddata.length > 0 ? (
            <Stack overflow="scroll" p="3rem" height="100vh">
              {seacheddata?.map((el,index) => {
                return (
                  <Box
                    key={index}
                    display="flex"
                    cursor="pointer"
                    width="100%"
                    onClick={() => {
                      navigate(`/gym/${el.user_id}`);
                    }}
                  >
                    <Image
                      width="45%"
                      src={
                        el?.cover_image
                          ? el.cover_image
                          : "https://blog.nasm.org/hubfs/cleangym%20%281%29.jpg"
                      }
                    />
                    <Box
                      backgroundColor="#131313"
                      justifyContent="space-between"
                      display="flex"
                      width="100%"
                      spacing="auto"
                      p="2rem"
                      lineHeight="2rem"
                    >
                      <Box backgroundColor="#131313">
                        <Heading
                          backgroundColor="#131313"
                          color="white"
                          fontSize="large"
                        >
                          {el.gym_name}
                        </Heading>
                        <HStack
                          backgroundColor="#131313"
                          color="white"
                          pt="1rem"
                          pb="1rem"
                        >
                          {star.map((ele, index) => {
                            if (index + 1 <= el.rating) {
                              return <AiTwotoneStar fontSize="1rem" />;
                            }
                            return <AiOutlineStar fontSize="1rem" />;
                          })}
                        </HStack>
                        <HStack
                          backgroundColor="#131313"
                          fontSize="larger"
                          color="white"
                        >
                          <Text backgroundColor="#131313">{el.address2},</Text>
                          <Text backgroundColor="#131313">{el.adddress1},</Text>
                          <Text backgroundColor="#131313">{el.city}</Text>
                        </HStack>
                        <HStack
                          backgroundColor="#131313"
                          fontSize="larger"
                          color="white"
                        >
                          <Text backgroundColor="#131313">
                            {el.duration_text} away
                          </Text>
                          <Text backgroundColor="#131313">
                            | {el.distance_text}
                          </Text>
                        </HStack>
                      </Box>
                      <Button top="90%" colorScheme="red">
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          ) : seacheddata.length == 0 && searchinpage.length > 0 ? (
            <Heading>No data</Heading>
          ) : (
            <Stack overflow="scroll" p="3rem" height="100vh">
              {data?.map((el) => {
                return (
                  <Box
                    key={el.user_id}
                    display="flex"
                    cursor="pointer"
                    backgroundColor="#131313"
                    width="100%"
                    onClick={() => {
                      navigate(`/gym/${el.user_id}`);
                    }}
                  >
                    <Image
                      width="45%"
                      src={
                        el?.cover_image
                          ? el.cover_image
                          : "https://blog.nasm.org/hubfs/cleangym%20%281%29.jpg"
                      }
                    />
                    <Box
                      backgroundColor="#131313"
                      justifyContent="space-between"
                      display="flex"
                      width="100%"
                      spacing="auto"
                      p="2rem"
                      lineHeight="2rem"
                    >
                      <Box backgroundColor="#131313">
                        <Heading
                          backgroundColor="#131313"
                          color="white"
                          fontSize="large"
                        >
                          {el.gym_name}
                        </Heading>
                        <HStack
                          backgroundColor="#131313"
                          color="white"
                          pt="1rem"
                          pb="1rem"
                        >
                          {star.map((ele, index) => {
                            if (index + 1 <= el.rating) {
                              return (
                                <AiTwotoneStar key={index} fontSize="1rem" />
                              );
                            }
                            return (
                              <AiOutlineStar key={index} fontSize="1rem" />
                            );
                          })}
                        </HStack>
                        <HStack
                          backgroundColor="#131313"
                          fontSize="larger"
                          color="white"
                        >
                          <Text backgroundColor="#131313">{el.address2},</Text>
                          <Text backgroundColor="#131313">{el.adddress1},</Text>
                          <Text backgroundColor="#131313">{el.city}</Text>
                        </HStack>
                        <HStack
                          backgroundColor="#131313"
                          fontSize="larger"
                          color="white"
                        >
                          <Text backgroundColor="#131313">
                            {el.duration_text} away
                          </Text>
                          <Text backgroundColor="#131313">
                            | {el.distance_text}
                          </Text>
                        </HStack>
                      </Box>
                      <Button top="90%" colorScheme="red">
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          )}
        </Container>


        <SubFooter />
        <Footer />
      </Container>
    </Box>
  );
};
