function endereco(rua, cidade, cep) {
  (this.rua = rua), (this.cidade = cidade), (this.cep = cep);
}

const endereco1 = new endereco("a", "b", "c");
const endereco2 = new endereco("a", "b", "c");

function propIguais(endereco1, endereco2) {
  return (
    endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
  );
}
console.log(propIguais(endereco1, endereco2));

function endMemoriaIguais(endereco1, endereco2) {
  return endereco1 === endereco2;
}
console.log(endMemoriaIguais(endereco1, endereco2));
