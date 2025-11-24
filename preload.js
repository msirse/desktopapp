const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    chrome: process.versions.chrome,
    node: process.versions.node,
    electron: process.versions.electron
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, window.versions[type])
    }
})
