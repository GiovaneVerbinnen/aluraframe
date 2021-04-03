class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return `
      <table
      class="table table-bordered table-hover mt-4 bg-white"
      style="width: 100%"
      >
          <thead>
            <tr class="text-center">
                <th scope="col">DATA</th>
                <th scope="col">QUANTIDADE</th>
                <th scope="col">VALOR</th>
                <th scope="col">VOLUME</th>
            </tr>
          </thead>

          <tbody>
          ${model.negociacoes
            .map(
              (n) =>
                `
            <tr class="text-center" >
              <td>${DateHelper.dataParaTexto(n.Data)}</td>
              <td>${n.Quantidade}</td>
              <td>R$ ${n.Valor}</td>
              <td>R$ ${n.Volume}</td>
            </td>
            `
            )
            .join("")}
          </tbody>

          <tfoot >
        
          <td colspan="3" class="table-active text-center"> <strong>TOTAL</strong></td>
          <td class="table-active">
          <strong>
          R$ ${model.negociacoes.reduce((total, n) => total + n.Volume, 0.0)} 
          </strong>
          </td>
          
          </tfoot>
      </table>
    `;
  }
}
