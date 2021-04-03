class DateHelper {
  constructor() {
    throw new Error("Esta classe nao pode ser instanciada");
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("Deve estar no formato AAAA-MM-DD");
    }
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }

  // Adicionada validação para corrigir o '0' nos meses < 10. Antes: Abril = 4
  static dataParaTexto(data) {
    let mes = data.getMonth() + 1;
    return mes < 10
      ? `${data.getDate()}/0${mes}/${data.getFullYear()}`
      : `${data.getDate()}/${mes}/${data.getFullYear()}`;
  }
}
