"use client";

import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const data = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Solution individuelle",
    id: 1,
  },

  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Solution Technologique",
    id: 2,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    id: 3,
  },
];

function QuizzSimple({ product }: any) {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Add logic to start the quiz for the selected product
    console.log(`Starting quiz for ${product.name}`);

    // Redirect the user to the quiz page for the selected product
    navigate(`/begin-quizz/${product.id}`);
  };
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          borderColor={useColorModeValue("red", "pink.400")}
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={product.imageURL}
            alt={`Picture of ${product.name}`}
            roundedTop="lg"
          />

          <Box p="4">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {product.name}
              </Box>
            </Flex>
            <Flex
              marginLeft={4}
              marginTop={4}
              justifyContent="flex-end"
              alignSelf="end"
            >
              <Button
                bgGradient="linear(to-r, red.400, pink.400)"
                _hover={{
                  bgGradient: "linear(to-r, blue.400, pink.400)",
                  boxShadow: "xl",
                }}
                onClick={handleStartQuiz}
              >
                Start Quiz
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

function QuizzList() {
  return (
    <>
      <Navbar />
      <Heading as="h2" size="xl" mb={4} textAlign="center" mt={10}>
        Select Quizz
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
        {data.map((product, index) => (
          <QuizzSimple key={index} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default QuizzList;
