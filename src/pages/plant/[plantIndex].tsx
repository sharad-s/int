import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Heading, HStack, Tag, VStack, Text } from "@chakra-ui/react";
import { Data } from "../../types/Data";
import { fetchRoute } from "../../services/fetchData";
import useSwr from "swr";
import useActiveQuarters from "../../hooks/useActiveQuarters";

const Plant = () => {
  const router = useRouter();
  const { plantIndex } = router.query;
  const { data } = useSwr<Data>(`/api/${plantIndex ?? 0}`, fetchRoute);
  const quarters = useActiveQuarters(data);
  return (
    <VStack w="100%" h="100vh" p={12} bg="">
      <VStack w="100%"  mb={6} pb={6}>
        {/* Top Bar */}
        <HStack w="100%" bg="" position="relative" justify={"center"}>
          <Box position="absolute" left={{ base: 5, lg: 20 }}>
            <Link href="/">
              <a>Go Back</a>
            </Link>
          </Box>
          <Heading mx="auto">{data?.name}</Heading>
        </HStack>
        {/* Tags */}
        <HStack spacing={1}>
          {quarters.map((q, i) => (
            <Tag
              size={"md"}
              key={i}
              variant={q ? "solid" : "outline"}
              colorScheme="teal"
            >
              Q{i + 1}
            </Tag>
          ))}
        </HStack>
      </VStack>
      {/* Care */}
      <VStack w="100%" mt={12} align="center"  px={12}>
        <Heading mb={6}>Care</Heading>
        <ul>
          {Object.keys(data?.care ?? {}).map((q) => {
            return (
              <VStack p={6} w="100%" bg="" align="center" key={q}>
                <Heading fontSize={"2xl"}>{q.toUpperCase()}</Heading>
                <Text fontSize={"2xl"}>{data?.care[q]}</Text>
              </VStack>
            );
          })}
        </ul>
      </VStack>
    </VStack>
  );
};

export default Plant;
