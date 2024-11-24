import { Howl } from 'howler';

class SoundManager {
  private static instance: SoundManager;
  private bgm: Howl;
  private effects: {
    correct: Howl;
    incorrect: Howl;
    click: Howl;
    success: Howl;
  };
  private isMuted: boolean = false;
  private bgmVolume: number = 0.3;
  private effectsVolume: number = 0.5;

  private constructor() {
    this.bgm = new Howl({
      src: ['/sounds/background.mp3'],
      loop: true,
      volume: this.bgmVolume,
      html5: true
    });

    this.effects = {
      correct: new Howl({
        src: ['/sounds/correct.mp3'],
        volume: this.effectsVolume
      }),
      incorrect: new Howl({
        src: ['/sounds/incorrect.mp3'],
        volume: this.effectsVolume
      }),
      click: new Howl({
        src: ['/sounds/click.mp3'],
        volume: this.effectsVolume
      }),
      success: new Howl({
        src: ['/sounds/success.mp3'],
        volume: this.effectsVolume
      })
    };
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public playBGM() {
    if (!this.isMuted) {
      this.bgm.play();
    }
  }

  public stopBGM() {
    this.bgm.stop();
  }

  public pauseBGM() {
    this.bgm.pause();
  }

  public resumeBGM() {
    if (!this.isMuted) {
      this.bgm.play();
    }
  }

  public playEffect(effect: keyof typeof this.effects) {
    if (!this.isMuted) {
      this.effects[effect].play();
    }
  }

  public mute() {
    this.isMuted = true;
    this.bgm.volume(0);
    Object.values(this.effects).forEach(effect => effect.volume(0));
  }

  public unmute() {
    this.isMuted = false;
    this.bgm.volume(this.bgmVolume);
    Object.values(this.effects).forEach(effect => effect.volume(this.effectsVolume));
  }

  public toggleMute() {
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return this.isMuted;
  }

  public setVolume(volume: number) {
    this.bgmVolume = volume;
    this.effectsVolume = volume;
    if (!this.isMuted) {
      this.bgm.volume(volume);
      Object.values(this.effects).forEach(effect => effect.volume(volume));
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const soundManager = SoundManager.getInstance(); 