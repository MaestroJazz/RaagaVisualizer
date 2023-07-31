import { useRaagas } from "./RaagaContext"
import MIDISounds from "midi-sounds-react"
import { MusicSound } from "./MusicSound"
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled"
import { IconButton } from "@mui/material"

interface Props {
  selectedRaaga?: string
}

const MusicPlayer = ({ selectedRaaga }: Props) => {
  const context = useRaagas()
  const westernNotes = selectedRaaga
    ? context?.getWesternNotes(selectedRaaga)(context.raagas)
    : []

  let midiSounds: any

  function playTestInstrument() {
    let westernNotesString = ""
    westernNotesString += "C3 "
    westernNotes?.forEach((note) => {
      note != "C" && (westernNotesString += note + "3 ")
    })
    westernNotesString += "C4 C4 "

    for (let i = (westernNotes?.length ?? 0) - 2; i >= 1; i--) {
      westernNotesString += (westernNotes?.[i] ?? "") + "3 "
    }
    westernNotesString += "C3"
    let player = new MusicSound(midiSounds, westernNotesString)
    player.play()
  }

  return (
    <>
      {selectedRaaga && (
        <div>
          <IconButton
            color="primary"
            aria-label="Play Raaga"
            size="large"
            onClick={playTestInstrument}
          >
            <PlayCircleFilledIcon fontSize="large" />
          </IconButton>
          <MIDISounds
            ref={(ref: any) => (midiSounds = ref)}
            appElementName="root"
            instruments={[3]}
          />
        </div>
      )}
    </>
  )
}

export default MusicPlayer
