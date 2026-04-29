const usedNumbers = new Set<number>();

function RandomNumberGenerator({ min, max }: { min: number; max: number }): number {
  // Generate number between min and max that is not in usedNumbers
  if (usedNumbers.size >= 100) return 0;

  let num: number;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.has(num));

  usedNumbers.add(num);
  return num;
}

export default RandomNumberGenerator;
