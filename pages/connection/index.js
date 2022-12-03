import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import ContractHelper from '../../helpers/Contract'

function Connection() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const helper = new ContractHelper();
  helper.gett();

  return(
    <>
      {isConnected? 
        <div>
          Connected to {address}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
        :
        <button onClick={() => connect()}>Connect Wallet</button>
    }
      </>
  )

}

export default Connection
