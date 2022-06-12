export default function isTriplet(n1: number, n2: number, n3: number) {
  const sort = [n1, n2, n3].sort((a, b) => a - b);
  const [n11, n22, n33] = sort;
  return n11 ** 2 + n22 ** 2 === n33 ** 2;
}
