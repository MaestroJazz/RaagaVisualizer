import { useState } from "react"
import "./App.css"
import RaagaMenu from "./components/RaagaMenu"
import { RaagaProvider } from "./components/RaagaContext"
import ChakraMenu from "./components/ChakraMenu"
import SwaraList from "./components/SwaraList"
import WesternTranslation from "./components/WesternTranslation"
import PianoImage from "./components/PianoImage"
import { Box, Slider } from "@mui/material"
import MusicPlayer from "./components/MusicPlayer"

function App() {
  const [selectedChakra, setSelectedChakra] = useState("")
  const [selectedRaaga, setSelectedRaaga] = useState<string | undefined>(
    undefined
  )
  const [pianoSize, setPianoSize] = useState(1)
  const [sliderValue, setSliderValue] = useState(1)

  const handleSelectedChakra = (chakra: string | undefined) => {
    if (chakra) {
      setSelectedChakra(chakra)
      setSelectedRaaga(undefined)
    }
  }

  const handleSelectedRaaga = (raaga: string | undefined) => {
    if (raaga) {
      setSelectedRaaga(raaga)
    }
  }

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value)
  }

  const handleSliderChangeCommitted = (
    _event: any,
    newValue: number | number[]
  ) => {
    setPianoSize(newValue as number)
  }

  return (
    <>
      <RaagaProvider>
        <div style={{ paddingTop: "60px" }}>
          <h1 style={{ fontSize: 32 }}>Raaga Visualizer</h1>
        </div>

        <ChakraMenu handleSelect={handleSelectedChakra} />
        <RaagaMenu
          selectedChakra={selectedChakra}
          handleSelect={handleSelectedRaaga}
        />
        <SwaraList selectedRaaga={selectedRaaga} />
        <WesternTranslation selectedRaaga={selectedRaaga} />
        <PianoImage selectedRaaga={selectedRaaga} pianoSize={pianoSize} />
        <Box sx={{ paddingTop: 3 }}>
          <div id="input-slider">
            <h2>Piano Size</h2>
          </div>
          <Slider
            aria-label="Scale"
            value={sliderValue}
            valueLabelDisplay="auto"
            step={0.5}
            min={0.5}
            max={4}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderChangeCommitted}
          />
        </Box>
        <MusicPlayer selectedRaaga={selectedRaaga} />
      </RaagaProvider>
    </>
  )
}

export default App
