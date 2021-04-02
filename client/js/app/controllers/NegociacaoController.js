class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    Object.freeze(this);
  }

  adiciona(event) {
    event.preventDefault();

    let data = this._inputData.value;

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    let diaMesAno = {};
    console.log(negociacao.data);
  }
}
