import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Heading,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useToast,
} from "@chakra-ui/react";

// Import quizData directly
import quizData from "../mock/quizData.json";

function BeginQuizz() {
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Simulate fetching quiz data
    // Replace this with your actual logic to fetch quiz data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);

  useEffect(() => {
    if (!isLoading) {
      openModal();
    }
  }, [isLoading]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    // Check if it's the last question, then show the score and close the modal
    if (currentQuestionIndex === quizData.questions.length - 1) {
      setIsModalOpen(false);
      showScore();
      navigate("/quizz");
    } else {
      // Move to the next question first
      moveToNextQuestion(true); // Assuming the user answered true, adjust as needed
      setIsModalOpen(false);
    }
  };

  const handleAnswer = (isTrue) => {
    const answerStatus = isTrue ? "True" : "False";
    console.log(`User's answer is ${answerStatus}`);
    showToast(answerStatus);
    moveToNextQuestion(isTrue);
  };

  const moveToNextQuestion = (isTrue) => {
    // Update the score based on the answer
    if (isTrue) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const showToast = (answerStatus) => {
    toast({
      title: `Your answer is ${answerStatus}`,
      status: answerStatus === "True" ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const showScore = () => {
    showToast(
      `Quiz completed! Your score is ${score} out of ${quizData.questions.length}`,
      "info"
    );
    console.log("Showing score...", score);
    setIsModalOpen(false);
  };

  const currentQuestion = quizData?.questions[currentQuestionIndex];

  return (
    <Box>
      {isLoading ? (
        <Center h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            contentLabel="Question Modal"
            ariaHideApp={false}
          >
            <ModalOverlay />

            <ModalContent alignItems="center" p={25} mt={25}>
              <ModalHeader>{currentQuestion.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody alignItems="center" justifyContent="center">
                <Text>{currentQuestion.description}</Text>
                <Center alignItems="center" p={25} mt={25}>
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(option.isCorrect)}
                      mr={4}
                      bg="blue.400"
                    >
                      {option.text}
                    </Button>
                  ))}
                </Center>
              </ModalBody>
            </ModalContent>
          </Modal>
          {!isModalOpen &&
            currentQuestionIndex === quizData.questions.length - 1 && (
              // Section to display the score at the end of the quiz
              <Box>
                <Heading mb={4}>Quiz Completed!</Heading>
                <Text>
                  Your score is: {score} out of {quizData.questions.length}
                </Text>
              </Box>
            )}
        </>
      )}
    </Box>
  );
}

export default BeginQuizz;
