function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let desc = "";
    let genero = "";

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado</p>"
        return
    };

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        desc = dado.desc.toLocaleLowerCase()
        genero = dado.genero.toLocaleLowerCase()

        

        if ((titulo.includes(campoPesquisa)) || (desc.includes(campoPesquisa)) || (dado.genero.includes(campoPesquisa))) {
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descrição-meta">
                ${dado.desc}
            </p>
            <a href=${dado.link} target="_blank">
            Mais informações
            </a>
        </div>
    `
        };
    };

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>"
    };
    
    section.innerHTML = resultados;
};


