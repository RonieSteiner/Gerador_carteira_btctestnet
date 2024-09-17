// Importando as dependências
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';
import { validate, getAddressInfo } from 'bitcoin-address-validation';

// Definindo a rede
const network = bitcoin.networks.testnet;

// Derivação de endereços de carteiras HD
const path = "m/44'/1'/0'/0/0";

// Criando a seedphrase
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira
let root = bip32.fromSeed(seed, network);

// Criando uma conta com par de chave privada e pública
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Gerando um endereço Bech32 (P2WPKH)
let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log("Carteira gerada");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed: ", mnemonic);
console.log(bitcoin.networks);

// Validando o endereço
const isValid = validate(btcAddress, 'testnet');
console.log("Endereço é válido para a testnet: ", isValid);
