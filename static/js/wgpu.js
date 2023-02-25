const init = await import('~/workspace/hqf/pkg/game.js');
alert("balls"); 
init().then(() => console.log("WASM Loaded"));