import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Center, Image } from "@chakra-ui/react"
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
          icon={<Image src="images/lens.png" />}
          title={"Lens Protocol"}
          text={
            "Lens Protocol integration, displaying contract interactions by followed users to flag potential spam"
          }
        />
        <Feature
          icon={<Image src="images/gpt.jpeg" borderRadius={100} />}
          title={"GPT-4 API"}
          text={"GPT-4 reviewing transaction methods, highlighting risks"}
        />
        <Feature
          icon={<Image src="images/worldcoin.png" />}
          title={"World ID"}
          text={"World ID KYC authentication. Prevent accidental spam"}
        />
      </SimpleGrid>
    </Box>
  )
}
