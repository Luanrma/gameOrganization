import { createNewElement, getPlayersList } from "./utils.js";

const app = document.getElementById('app')

const buildPlayersList = async () => {
    const tableElement = createNewElement('table', {}, element => { 
        app.appendChild(element).innerHTML = `
            <tr>
                <th>Nome</th>
                <th>Posição</th>
                <th>Escalado</th>
            </tr>
        `
    })

    const list = await getPlayersList();
    list['data_20231114'].forEach(player => {
        tableElement.innerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.position}</td>
                <td>${player.is_confirmed ? "Dentro" : "Fora"}</td>
            </tr>
        `
    });
}

export default buildPlayersList;