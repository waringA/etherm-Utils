import { ethers } from 'ethers';
import { readFileSync, writeFileSync } from 'node:fs';
import dayjs from 'dayjs';
class EthermUtils {
  constructor({ rpc, url }) {
    this.provider = new ethers.JsonRpcProvider(rpc);
    this.wallet;
    this.url = url;
  }
  changeNetWork({ rpc, url }) {
    this.provider = new ethers.JsonRpcProvider(rpc);
    this.url = url;
  }
  async getBlance(address = this.wallet.address, leng = 3) {
    return this.formatPrice(await this.provider.getBalance(address), leng);
  }
  formatPrice(price, leng = 3) {
    const _price = Number(ethers.formatEther(price));
    const fmtPrice = _price.toFixed(leng);
    return fmtPrice;
  }
  parsePrice(price) {
    const fmtPrice = String(price);
    return ethers.parseEther(fmtPrice);
  }
  createWallet() {
    const { address, privateKey } = ethers.Wallet.createRandom();
    return { address, privateKey };
  }
  linkWallet(key) {
    this.wallet = new ethers.Wallet(key, this.provider);
  }
  async sendTransaction(arg) {
    if (this.wallet) {
      const tx = await this.wallet.sendTransaction({ ...arg });
      const result = await tx.wait();
      console.log('拿到了');
      const parseUrl = {
        scanUrl: `${this.url}tx/${result.hash}`,
        statuTime: this.formatTime(),
      };
      return { ...result, ...parseUrl };
    } else {
      console.log('Wallet not Link');
    }
  }
  formatData(type, data) {
    if (type === 'stringify') {
      return JSON.stringify(data);
    } else if ('parse') {
      return JSON.parse(data);
    } else {
      return JSON.stringify(data);
    }
  }
  writeFile(fileName, data) {
    try {
      const fmtData = this.formatData('stringify', data);
      writeFileSync(fileName, fmtData, 'utf-8');
      console.log('writeFile OK');
    } catch (err) {
      console.log('writeFile Error', err);
    }
  }
  readFile(fileName) {
    try {
      const data = readFileSync(fileName, { encoding: 'utf-8' });
      const fmtData = this.formatData('parse', data);
      console.log('readFile OK');
      return fmtData;
    } catch (err) {
      console.log('readFile Error', err);
    }
  }
  sleep(time = 2000) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), time);
    });
  }
  formatTime() {
    return dayjs().format('YYYY-MM-DD-HH:mm:ss');
  }
}
export default EthermUtils;
