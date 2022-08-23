import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import Section from "../utils/section";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Section delay={0.1}>
            {" "}
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Sego starter kit <br />
              <Text as={"span"} color={"green.400"}>
                Lets go
              </Text>
            </Heading>
          </Section>
          <Section delay={0.3}>
            {" "}
            <Text color={"gray.500"}>
              Gang shit, that's all I'm on
              <br />
              Nigga, gang shit, that's all I'm on
              <br />
              Gang shit, that's all I'm on
              <br />
              Let it bang, bang, let it bang, bang
              <br />
              'Til his brains hang and his mama sang
              <br />
              And the pastor sang and them bullets sang
              <br />
              And them choppers sang and the choir sang
            </Text>
          </Section>

          <Section delay={0.5}>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
                onClick={() => router.push("/login")}
              >
                Get Started
              </Button>

              <Box>
                <Text
                  fontSize={"lg"}
                  fontFamily={"Caveat"}
                  position={"absolute"}
                  right={"-125px"}
                  top={"-15px"}
                  transform={"rotate(10deg)"}
                >
                  AK with the scope!
                </Text>
              </Box>
            </Stack>
          </Section>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
