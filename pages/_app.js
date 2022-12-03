import { WagmiConfig, createClient } from 'wagmi'
import {
  defaultChains, // mainnet, goerli
} from 'wagmi'

const client = createClient({
  autoConnect: true,
  provider: defaultChains.goerli
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
