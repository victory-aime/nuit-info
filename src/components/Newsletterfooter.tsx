import React, { useState } from 'react';
import { Flex, Input, Button, Text, Link } from '@chakra-ui/react';

function NewsletterFooter() {
    const [email, setEmail] = useState('');

    const subscribeHandler = () => {
        // Handle subscription logic here
        console.log(`Subscribed with email: ${email}`);
        // You can make an API call to handle the subscription on the server
    };

    return (
        <Flex
            direction="column"
            justifyContent="center"  // Center vertically
            alignItems="center"  // Center horizontally
            bg="#fecf6a"
            color="#333"  // Change the text color to a darker shade
            padding="6"
            borderRadius="md"
            boxShadow="md"
            mx="4"  // Margin on both sides
        >
            <Text fontSize="xl" fontWeight="bold" mb="3">
                Newslater
            </Text>
            <Text mb="4" textAlign="center">
                Recevez les dernières actualités sur le changement climatique et nos actions.
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" mb="4">
                <Input
                    type="email"
                    placeholder="Votre adresse e-mail"
                    variant="filled"
                    size="md"
                    mr={{ base: 0, md: '2' }}
                    mb={{ base: '2', md: 0 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button colorScheme="teal" size="md" onClick={subscribeHandler}>
                    S'abonner
                </Button>
            </Flex>
            <Text fontSize="sm">
                En vous abonnant, vous acceptez notre{' '}
                <Link color="teal.500" href="/politique-de-confidentialite">
                    politique de confidentialité
                </Link>
                .
            </Text>
        </Flex>
    );
}

function CustomText() {
    return (
        <Text fontSize="lg" color="#333" mt="4" textAlign="center">
            Votre texte personnalisé ici. Modifiez cette section selon vos besoins.
        </Text>
    );
}

export { NewsletterFooter, CustomText };
