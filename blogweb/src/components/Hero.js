
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxW="1300px"
      display="flex"
      h="100vh"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack height="350px" justify="space-around" mt={{ base: "8", md: "0" }}>
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as="h1">
        Simplify Your Life: Benefits of Minimalism
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          as="p"
          maxW={{ base: "100%", md: "80%" }}
        >
           "Explore expert perspectives on technology, lifestyle, personal growth, and entrepreneurship."
        </Text>
        <Box>
          <Button colorScheme="orange">Check Posts</Button>
        </Box>
      </Stack>
      <Flex mt={{ base: "8", md: "0" }} justifyContent="center">
        <Image
          width={{ base: "20%", md: "auto" }}
          mr="4"
          src="/images/2a.jpg" alt="Hero Image"
        />
      </Flex>
    </Container>
  );
};

export default Hero;
