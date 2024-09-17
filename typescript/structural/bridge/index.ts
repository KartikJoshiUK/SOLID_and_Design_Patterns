// IMPLEMENTATION
interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing audio on windows.");
  }
  playVideo(): void {
    console.log("Playing video on windows.");
  }
}
class MacOSMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing audio on Mac OS.");
  }
  playVideo(): void {
    console.log("Playing video on Mac OS.");
  }
}

// ABSTRACTION
abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}
  abstract playFile(): void;
}
class AudioPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playAudio();
  }
}
class VideoPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playVideo();
  }
}

// USAGE

const audioPlayer = new AudioPlayer(new WindowsMediaPlayer());
const videoPlayer = new VideoPlayer(new MacOSMediaPlayer());
audioPlayer.playFile();
videoPlayer.playFile();
