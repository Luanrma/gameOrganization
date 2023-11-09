const playersListPath = "../db/playersList.json";

const createNewElement = (tag, props = {}, callback = null) => {
    const element = document.createElement(tag)
    if(props){
        const attributes = Object.entries(props)
        attributes.forEach(([key, value]) => element.setAttribute(key, value))
    }
    if(callback){
        callback(element)
    }
    return element
}

const getPlayersList = async () => {
    const playersData = await fetch(playersListPath) 
    return playersData.json()
};

const setNewGame = () => {

}

export { createNewElement, getPlayersList };