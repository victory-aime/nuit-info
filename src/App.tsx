import { Box, Flex, useColorModeValue, Card, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ClimateChangeIntro from "./components/Masection";
import HeroSection from "./components/Masection";
import UneAutreSection from "./components/Uneautresection";
import Lasectionencore from "./components/Lasectionencore";
import Footer, { NewsletterFooter } from "./components/Newsletterfooter";
//import "./index.css"

function App() {
  return (
    <Box w="full" h="full" px={4} py={4}>
      <Flex direction="column" h="full">
        <Navbar />
        <Flex flex={1} align="center" justify="center">
          <ClimateChangeIntro />
        </Flex>
        <Flex
          flex={1}
          align="center"
          justify="center"
          color={useColorModeValue("black.50", "pink.400")}
        >
          <UneAutreSection />
        </Flex>
        <Center>
          <Lasectionencore />
        </Center>
        <Flex>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
