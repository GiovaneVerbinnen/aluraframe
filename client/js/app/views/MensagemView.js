class MensagemView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return model.Texto
      ? `<p class="alert alert-info">${model.Texto}</p>`
      : "<p></p>";
  }
}
