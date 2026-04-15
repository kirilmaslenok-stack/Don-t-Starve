// js/core/core.js
class CoreGame {
    constructor(gameState, gameBalance, gameAI, effectsManager, soundManager, camera) {
        this.gameState = gameState;
        this.gameBalance = gameBalance;
        this.gameAI = gameAI;
        this.effectsManager = effectsManager;
        this.soundManager = soundManager;
        this.camera = camera;
        this.lastTimestamp = 0;
    }
    // Добавьте в класс CoreGame

    start() {
    
        this.lastTimestamp = 0;
    
        console.log("🎮 Game loop started");
    
    // Запускаем фоновую музыку через 1 секунду
    
        setTimeout(() => {
        
            this.soundManager.playMusic('ambient', 0.3);
    
        }, 1000);
}

    
}
