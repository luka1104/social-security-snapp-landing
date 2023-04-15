import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Center } from "@chakra-ui/react"
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc"

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box p={4}>
      <Center mb="40px">
        <Heading size={"xl"}>
          <Text color="purple.400">Features</Text>
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Lens Protocol"}
          text={
            "Lens Protocol integration, displaying contract interactions by followed users to flag potential spam"
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"GPT-4 API"}
          text={"GPT-4 reviewing transaction methods, highlighting risks"}
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"World ID"}
          text={"World ID KYC authentication. Prevent accidental spam"}
        />
      </SimpleGrid>
    </Box>
  )
}
