import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

function UneAutreSection() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);

  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);

  const transitionStyles = {
    transition: "bottom 0.3s ease",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Affiche le footer uniquement lorsqu'on est proche du bas de la page
      setShowFooter(scrollPosition + windowHeight >= documentHeight - 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          mr="4"
          position="relative"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <Image
            src="src/assets/im3.jpg"
            alt="Image 3"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            width="600px"
            height="1000px"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            {...transitionStyles}
            p="4"
            bg="rgba(0, 0, 0, 0.7)"
            width="80%"
          >
            <Text fontSize="4xl" fontWeight="bold">
              Mythe
            </Text>
            <Text>
              "Le changement climatique n'est pas réel, car il fait parfois plus
              froid que d'habitude."
            </Text>
          </Box>
        </Box>
        <Box
          position="relative"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <Image
            src="src/assets/im4.jpg"
            alt="Image 4"
            borderRadius="lg"
            boxSize="full"
            maxH="400px"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            {...transitionStyles}
            p="4"
            bg="rgba(0, 0, 0, 0.7)"
            width="80%"
          >
            <Text fontSize="4xl" fontWeight="bold">
              Réalité
            </Text>
            <Text>
              Le changement climatique ne se mesure pas à de simples variations
              de température à court terme. Il s'agit d'une tendance à long
              terme qui montre une augmentation globale des températures
              moyennes à travers le monde.
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default UneAutreSection;
