# EthermUtils 说明文档

# 基于Ethers.js

### 为了减去繁琐且无聊的操作所封装的一个工具库 可以进行各种升级变得更好用

‍

> /config  配置rpc与url初始化信息  导出为:`netWorkConfig`​

```javascript
{
  ETH: { rpc: 'https://eth.public-rpc.com', url: 'https://etherscan.io/' },
  BNB: { rpc: 'https://bscrpc.com', url: 'https://bscscan.com/' },
  POLYGON: { rpc: 'https://polygon-rpc.com', url: 'https://polygonscan.com/' },
  ARB: { rpc: 'https://arbitrum.drpc.org', url: 'https://arbiscan.io/' },
  LINEAN: { rpc: 'https://linea.drpc.org', url: 'https://lineascan.build/' },
  TRON: { rpc: 'https://api.tatum.io/v3/blockchain/node/tron-mainnet', url: 'https://tronscan.org/#/' },
  ZKSYNC: { rpc: 'https://zksync.drpc.org', url: 'https://explorer.zksync.io/' },
}

```

> /utils     工具的目录  导出为: `EthermUtils`​

```javascript
new EthermUtils(netWorkConfig.BSC: {rpc: string, url: string})

# changeNetWork 改变网络 没有返回值
ethUtils.changeNetWork(netWorkConfig.ETH):void

# getBlance 没有参数默认为连接账户的地址 获取经过转换的余额,默认保留3位小数 leng可以自定义
ethUtils.getBlance(address: string, leng: number):number

# formatPrice 转换rpc返回Bigint的余额
ethUtils.formatPrice(price: string | number, leng: number):promise

# parsePrice 转换普通输入的value为Bigint
ethUtils.parsePrice(price: string | number):bigint

# createWallet 随机创建钱包 address钱包地址 privateKey私钥地址
ethUtils.ethUtils():{address: string, privateKey: string}

# linkWallet 传入私钥连接钱包 没有返回值
ethUtils.linkWallet(key: string):void

# sendTransaction 发送交易
ethUtils.sendTransaction(arg: {to: string, value: bigint}):ethers.TransactionResponse

# formatData 'stringify'转化为JSON 'parse'转换为对象或字符串格式 
ethUtils.formatData (type: 'stringify'| 'parse', data: any):string

# writeFile
ethUtils.writeFile(fileName: string, data: any)

# readFile 
ethUtils.readFile(fileName: string): any

# sleep 休眠
ethUtils.sleep(time: number):Promise
```

‍
