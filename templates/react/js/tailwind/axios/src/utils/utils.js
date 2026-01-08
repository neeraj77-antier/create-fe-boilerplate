import * as CryptoJS from "crypto-js";
import ENVIRONMENT from "../contants/constants";

/**
 * Function to get prime numbers in range (start, end)
 */
function getPrimeNumbersInRange(start, end) {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

export function getKey(value) {
  const key = ENVIRONMENT.STRING || "asdfasdfasd";

  // Get prime numbers in range (1, value)
  const primeNumbers = getPrimeNumbersInRange(1, value);

  // Generate key string using prime indices
  const resultString = primeNumbers
    .map((num) => key[num % key.length])
    .join("");

  return resultString;
}

const key = getKey(50);

const encryptData = (data) => {
  if (data) {
    const stringData = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(stringData, key).toString();
    return encrypted;
  }
};

const decryptData = (data) => {
  if (data) {
    const decrypted = CryptoJS.AES.decrypt(data, key);
    const stringData = decrypted.toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(stringData);
    } catch (e) {
      console.error("Failed to parse decrypted data", e);
      return null;
    }
  }
};

export { encryptData, decryptData };
