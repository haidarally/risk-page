function bigIntToBuffer(bigInt) {
  let hexString = bigInt.toString(16); // Convert to hexadecimal
  if (hexString.length % 2) {
    // Add leading zero if necessary to form a complete byte
    hexString = "0" + hexString;
  }

  const buffer = Buffer.from(hexString, "hex");

  return buffer;
}
/**
   * {
    "UND":2000,
    "NAV":667,
    "TIM":3277587576,
    "SIG":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"
}
   */
console.log(`UND: ${bigIntToBuffer(BigInt(2000)).toString("hex")}\n`);
console.log(`NAV: ${bigIntToBuffer(BigInt(667)).toString("hex")}\n`);
console.log(`TIM: ${bigIntToBuffer(BigInt(3277587576)).toString("hex")}\n`);
