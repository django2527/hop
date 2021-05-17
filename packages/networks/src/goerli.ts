import { chains } from '@hop-protocol/metadata'
import { Networks } from './types'

export const networks: Networks = {
  ethereum: {
    name: chains.ethereum.name,
    networkId: 5,
    rpcUrls: ['https://goerli.rpc.hop.exchange'],
    explorerUrls: ['https://goerli.etherscan.io']
  },
  polygon: {
    name: chains.polygon.name,
    networkId: 80001,
    rpcUrls: [
      'https://mumbai.rpc.hop.exchange',
      'https://rpc-mumbai.maticvigil.com'
    ],
    explorerUrls: ['https://explorer-mumbai.maticvigil.com']
  }
}