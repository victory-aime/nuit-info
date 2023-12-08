import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Heading, Text, Stack, Button } from "@chakra-ui/react";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box maxW="500px" mx="auto" borderRadius="lg" overflow="hidden">
      <Slider {...settings}>
        <Box>
          <Image
            src="src/assets/im5.jpg"
            alt="Image 5"
            borderRadius="lg"
            boxSize="full"
            maxH="400px" // Ajustez la hauteur maximale selon vos besoins
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src="src/assets/im4.jpg"
            alt="Image 4"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src="src/assets/im3.jpg"
            alt="Image 3"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src="src/assets/im2 (1).jpg"
            alt="Image 2 (1)"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src="src/assets/im2 (2).jpg"
            alt="Image 2 (2)"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            objectFit="cover"
          />
        </Box>
        {/* Ajoutez plus de diapositives au besoin */}
      </Slider>
    </Box>
  );
};

function ClimateChangeIntro() {
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      overflow="hidden"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bgGradient="linear(to-l, #F56565, #ED64A6, #ED8936, #ECC94B, #48BB78, #4299E1)"
      p={4}
      mx="auto"
      maxW="1000px"
    >
      <Box flex={{ base: "1", md: "1" }} mr={{ md: "4" }}>
        <Carousel />
      </Box>

      <Stack flex={{ base: "1", md: "1" }} align="flex-start" justify="center">
        <Heading size="lg" mb="2" color="white" fontWeight="bold">
          Le Changement Climatique
        </Heading>

        <Text
          fontSize="lg"
          color="white"
          mb="4"
          fontFamily="Times New Roman, sans-serif"
          fontWeight="normal"
        >
          Les changements climatiques désignent les variations à long terme de
          la température et des modèles météorologiques. Il peut s’agir de
          variations naturelles, dues par exemple à celles du cycle solaire ou à
          des éruptions volcaniques massives.
        </Text>

        {/* Ajoutez d'autres paragraphes au besoin */}
      </Stack>
    </Box>
  );
}

export default ClimateChangeIntro;
