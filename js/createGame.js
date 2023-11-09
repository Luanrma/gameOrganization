const btnCreateNewGame = document.getElementById('btn_new_game');
const inputGameDate = document.getElementById('game_date');

const createNewGame = async () => {
    btnCreateNewGame.addEventListener('click', async () => {
        let [year, month, day] = inputGameDate.value.split('-')
        // Exemplo de uso
        await adicionarNovaData('data_20231115');
    })
}

async function adicionarNovaData(novaData) {
    // Faz uma requisição Fetch para carregar o arquivo existente
    fetch('../db/playersList.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo.');
            }
            return response.json();
        })
        .then(jsonData => {
            // Verifica se a nova data já existe no objeto
            if (!jsonData.hasOwnProperty(novaData)) {
                // Adiciona um array vazio para a nova data
                jsonData[novaData] = [];
            } else {
                console.log("A data já existe.");
                return;
            }

            // Faz uma nova requisição Fetch para sobrescrever o arquivo existente
            fetch('../db/playersList.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(jsonData, null, 2),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao escrever no arquivo.');
                }
                console.log('Nova data adicionada com sucesso!');
            })
            .catch(error => console.error('Erro:', error));
        })
        .catch(error => console.error('Erro:', error));
}



export default createNewGame;
