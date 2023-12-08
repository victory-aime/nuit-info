import { Box, Flex, useColorModeValue, Card } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import QuizzList from "./components/Quizz";
//import "./index.css"

function App() {
  return (
    <Box w="full" h="full" px={4} py={4}>
      <Flex direction="column" h="full">
        <Navbar />
      </Flex>
    </Box>
  );
}

export default App;
