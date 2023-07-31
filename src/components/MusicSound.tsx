import { Note } from "tonal"

export class MusicSound {
  midiSounds: any
  westernNotes: string

  constructor(midiSounds: any, westernNotes: string) {
    this.midiSounds = midiSounds
    this.westernNotes = westernNotes
  }

  play() {
    let time = this.midiSounds.contextTime()
    this.westernNotes.split(" ").forEach((note) => {
      let midiNote = Note.midi(note)
      this.midiSounds.playChordAt(time, 3, [midiNote], 2.5)
      time += 0.5
    })
  }
}
