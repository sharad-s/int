import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Data } from "../types/data";

const Card: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <Box
      borderRadius="2xl"
      padding={6}
      py={12}
      borderColor="darkgray"
      backgroundColor="#F0F0F0"
      transition="transform 0.2s ease 0s"
      _hover={{
        cursor: "pointer",
        transform: "translateY(-7px)",
        boxShadow: "0px .2px 4px grey;",
      }}
      w="100%"
    >
      <VStack justify={"center"} align="center">
        <Heading fontSize="xl">{data.name}</Heading>
      </VStack>
    </Box>
  );
};

export default Card;
