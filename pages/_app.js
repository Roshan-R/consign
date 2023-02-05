import '../styles/globals.css'
import { WagmiConfig, createClient } from 'wagmi'
import {
  defaultChains, // mainnet, goerli
} from 'wagmi'
import { Toaster } from 'react-hot-toast'

const client = createClient({
  autoConnect: true,
  provider: defaultChains.goerli
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
