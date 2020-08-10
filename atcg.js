const DNAStrand = dna => {
  const complimentary = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  return dna.replace(/A|T|C|G/gi, function(matched) {
    return complimentary[`${matched}`]});
}
DNAStrand("GTA");

const DNAStrand = dna => {
  const complimentary = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  return dna.replace(/A|T|C|G/gi, matched => complimentary[`${matched}`]});

DNAStrand("GTA");
