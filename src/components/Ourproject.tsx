import React from "react";
import { Box, Heading, Flex, Text, Link, AspectRatio } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box>
      <section style={{ marginBottom: "30px" }}>
        <Heading as="h2" color="#1a1a1a" fontSize="xl" padding="20px">
          About Us
        </Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          marginTop="20px"
          alignItems="center"
        >
          <Box marginRight={{ md: "20px" }} padding="20px">
            <img
              src="image1.jpg"
              alt="About Us Image"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "50%", // Make the image circular
              }}
            />
          </Box>
          <Box>
            <Text
              fontWeight="bold"
              fontStyle="italic"
              fontSize="lg"
              textAlign="justify"
            >
              Information about the organizers and contributors to Nuit de
              l'info. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
        </Flex>
      </section>
       {/* Video */}
       <Box>
       <center>
        <AspectRatio
          maxW='560px' ratio={1}
        >
            <iframe title="video" src="https://www.youtube.com/watch?v=Xi9dOqV-u4I" allowFullScreen/>
        </AspectRatio>
          
       </center>
      </Box>


      {/* Footer */}
     
    </Box>
  );
};

export default AboutUs;
