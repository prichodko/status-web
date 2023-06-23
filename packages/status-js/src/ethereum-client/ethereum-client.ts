import { Point } from 'ethereum-cryptography/secp256k1'
import { ethers } from 'ethers'

export class EthereumClient {
  private provider: ethers.JsonRpcApiProvider

  constructor(url: string) {
    this.provider = new ethers.JsonRpcProvider(url)
  }

  async resolvePublicKey(
    ensName: string,
    options: { compress: boolean }
  ): Promise<string | undefined> {
    try {
      const resolver = await this.provider.getResolver(ensName)

      if (!resolver) {
        return
      }

      const address = resolver.address
      const abi = [
        'function pubkey(bytes32 node) view returns (bytes32 x, bytes32 y)',
      ]

      const resolverContract = new ethers.Contract(address, abi, this.provider)

      const node = ethers.namehash(ensName)
      const [x, y] = await resolverContract.pubkey(node)

      const px = BigInt(x)
      const py = BigInt(y)

      const point = new Point(px, py)
      point.assertValidity()

      const hex = point.toHex(options.compress)

      return `0x${hex}`
    } catch {
      return
    }
  }
}
