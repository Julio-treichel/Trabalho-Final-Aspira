export class Cadastro {
   nome: string;
   email: string;
   fone: string;

   constructor (nome: string, email: string, fone: string) {
      this.nome = nome
      this.email = email
      this.fone = fone
   }
}

export default Cadastro