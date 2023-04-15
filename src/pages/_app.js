import * as React from "react"
import { WagmiConfig, createClient } from "wagmi"
import { getDefaultProvider } from "ethers"
import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {
  const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })

  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  )
}
