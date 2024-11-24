export interface CoreModules {
  encouragementSystem: {
    messageGenerator: MessageGenerator;
    animationController: AnimationController;
    soundManager: SoundManager;
  };
  
  seonyCharacter: {
    expressionSystem: ExpressionSystem;
    interactionManager: InteractionManager;
    animationSet: AnimationSet;
  };
  
  mathGarden: {
    gardenSystem: GardenSystem;
    growthTracker: GrowthTracker;
    rewardManager: RewardManager;
  };
} 