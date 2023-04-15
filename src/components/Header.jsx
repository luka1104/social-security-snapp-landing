import { ReactNode } from "react"
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { BiWallet } from "react-icons/bi"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
)

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const shortenEOAName = (name) => {
    if (!name) return undefined
    if (name.startsWith("0x")) {
      return `${name.substring(0, 5)}...${name.substring(name.length - 5, name.length)}`
    }
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>SocialSecuritySnapp</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

              {isConnected ? (
                <Button
                  rounded={"full"}
                  cursor={"pointer"}
                  minW={0}
                  leftIcon={<BiWallet />}
                  colorScheme="purple"
                  onClick={disconnect}
                  bg={"purple.400"}
                  _hover={{
                    bg: "purple.500",
                  }}
                >
                  {shortenEOAName(address)}
                </Button>
              ) : (
                <Button
                  rounded={"full"}
                  cursor={"pointer"}
                  minW={0}
                  leftIcon={<BiWallet />}
                  colorScheme="orange"
                  onClick={connect}
                  bg={"purple.400"}
                  _hover={{
                    bg: "purple.500",
                  }}
                >
                  Connect Wallet
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
