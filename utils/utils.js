const fs = require('fs')

const hasDeployedContract = async () => {
    try {
        await fs.accessSync('./contract', fs.constants.R_OK)
        return true
    } catch (error) {
        return false
    }
}

const getDeployedContract = async () => {
    if (await hasDeployedContract()) {
        const data = await fs.readFileSync('./contract', 'utf-8')
        return data
    }
    return undefined
}

const setDeployedContract = (contractAdd) => {
    if (contractAdd) {
        try {
            fs.writeFileSync('./contract', contractAdd, 'utf-8')
            return true
        } catch (error) {
            return false
        }
    }
    return false
}

module.exports = { hasDeployedContract, setDeployedContract, getDeployedContract }