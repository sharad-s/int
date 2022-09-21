import {
  Box,
  Heading,
  Link,
  VStack,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react";
import NextLink from "next/link";
import useActiveQuarters from "../hooks/useActiveQuarters";
import { Data } from "../types/data";

const Card: React.FC<{ data: Data; index: number }> = ({ data, index }) => {
  const quarters = useActiveQuarters(data);

  return (
    <NextLink href={`/plant/${index}`} passHref>
      <Link
        as={Box}
        borderRadius="2xl"
        padding={6}
        borderColor="darkgray"
        backgroundColor="#F0F0F0"
        transition="transform 0.2s ease 0s"
        _hover={{
          cursor: "pointer",
          transform: "translateY(-7px)",
          boxShadow: "0px .2px 4px grey;",
        }}
      >
        <VStack justify={"center"} align="center">
          <Heading fontSize="2xl">{data.name}</Heading>
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
          <Text></Text>
        </VStack>
      </Link>
    </NextLink>
  );
};

export default Card;
