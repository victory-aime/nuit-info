import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

function Lasectionencore() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [showFooter, setShowFooter] = useState(false);

    const handleMouseEnter1 = () => setIsHovered1(true);
    const handleMouseLeave1 = () => setIsHovered1(false);

    const handleMouseEnter2 = () => setIsHovered2(true);
    const handleMouseLeave2 = () => setIsHovered2(false);

    const handleMouseEnter3 = () => setIsHovered3(true);
    const handleMouseLeave3 = () => setIsHovered3(false);

    const transitionStyles = {
        transition: 'bottom 0.3s ease',
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Affiche le footer uniquement lorsqu'on est proche du bas de la page
            setShowFooter(scrollPosition + windowHeight >= documentHeight - 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Flex direction="row" justifyContent="center" alignItems="center" height="100vh">
                <Box
                    mx="4"
                    position="relative"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                >
                    <Image
                        src="src/assets/im3.jpg"
                        alt="Image 3"
                        borderRadius="lg"
                        boxSize="full"
                        maxH="300px"
                        width="400px"
                        objectFit="cover"
                    />
                    {isHovered1 && (
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
                            <Text fontSize="2xl" fontWeight="bold">
                                Réussir la transition écologique:

                            </Text>
                            <Text>
                                À l’ADEME, nous sommes résolument engagés
                                dans la lutte contre le réchauffement climatique
                                et la dégradation des ressources.
                            </Text>
                        </Box>
                    )}
                </Box>
                <Box
                    mx="4"
                    position="relative"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                >
                    <Image
                        src="src/assets/im4.jpg"
                        alt="Image 4"
                        borderRadius="lg"
                        boxSize="full"
                        maxH="300px"
                        width="400px"
                        height="400px"
                        objectFit="cover"
                    />
                    {isHovered2 && (
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
                            <Text fontSize="2xl" fontWeight="bold">
                                L’URGENCE CLIMATIQUE
                            </Text>
                            <Text>
                                Effet de serre, conséquences, rapports du GIEC*
                                solutions : tout savoir sur le changement climatique.
                            </Text>
                        </Box>
                    )}
                </Box>
                <Box
                    mx="4"
                    position="relative"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                >
                    <Image
                        src="src/assets/im5.jpg"
                        alt="Image 5"
                        borderRadius="lg"
                        boxSize="full"
                        maxH="300px"
                        width="400px"
                        objectFit="cover"
                    />
                    {isHovered3 && (
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
                            <Text fontSize="2xl" fontWeight="bold">
                                6e rapport du GIEC:

                            </Text>
                            <Text>
                                quelles solutions face au changement climatique?
                            </Text>
                        </Box>
                    )}
                </Box>
            </Flex>

            {showFooter && (
                <footer
                    style={{
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        textAlign: "center",
                        padding: "10px",
                        position: "fixed",
                        bottom: 0,
                        width: "100%",
                    }}
                >
                    <Text fontSize="sm">
                        La Nuit de l'Info (2023) - Tous droits réservés - Conception :{' '}
                        <Link
                            color="yellow.500"
                            href="https://www.c.line-design.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            C.line Design
                        </Link>
                        <br />
                        Toute reproduction, même partielle, est strictement interdite.
                    </Text>
                </footer>
            )}
        </>
    );
}

export default Lasectionencore;
