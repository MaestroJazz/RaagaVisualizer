// PianoImage.tsx
import { useRaagas } from "./RaagaContext"
import "./PianoImage.css"
import { Box } from "@mui/material"

interface Props {
  selectedRaaga?: string
  pianoSize: number
}

const PianoImage = ({ selectedRaaga, pianoSize }: Props) => {
  const context = useRaagas()

  const highlightedKeys = selectedRaaga
    ? context?.getWesternNotes(selectedRaaga)(context.raagas)
    : []

  const scale = pianoSize ? pianoSize : 1
  return (
    <div className="piano-container">
      {highlightedKeys && (
        <Box sx={{ paddingTop: 3 }}>
          <svg className="center" width={368 * scale} height={240 * scale}>
            <rect
              id="C"
              x="0"
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("C") ? "highlighted" : ""
              }`}
            />
            <rect
              id="D"
              x={46 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("D") ? "highlighted" : ""
              }`}
            />
            <rect
              id="E"
              x={92 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("E") ? "highlighted" : ""
              }`}
            />
            <rect
              id="F"
              x={138 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("F") ? "highlighted" : ""
              }`}
            />
            <rect
              id="G"
              x={184 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("G") ? "highlighted" : ""
              }`}
            />
            <rect
              id="A"
              x={230 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("A") ? "highlighted" : ""
              }`}
            />
            <rect
              id="B"
              x={276 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("B") ? "highlighted" : ""
              }`}
            />

            <rect
              id="C2"
              x={322 * scale}
              y="0"
              width={46 * scale}
              height={240 * scale}
              className={`white-key ${
                highlightedKeys.includes("C") ? "highlighted" : ""
              }`}
            />

            <rect
              id="C#"
              x={28.66666 * scale}
              y="0"
              width={26 * scale}
              height={160 * scale}
              className={`black-key ${
                highlightedKeys.includes("C#") ? "highlighted" : ""
              }`}
            />
            <rect
              id="D#"
              x={83.33333 * scale}
              y="0"
              width={26 * scale}
              height={160 * scale}
              className={`black-key ${
                highlightedKeys.includes("D#") ? "highlighted" : ""
              }`}
            />
            <rect
              id="F#"
              x={164.5 * scale}
              y="0"
              width={26 * scale}
              height={160 * scale}
              className={`black-key ${
                highlightedKeys.includes("F#") ? "highlighted" : ""
              }`}
            />
            <rect
              id="G#"
              x={216.5 * scale}
              y="0"
              width={26 * scale}
              height={160 * scale}
              className={`black-key ${
                highlightedKeys.includes("G#") ? "highlighted" : ""
              }`}
            />
            <rect
              id="A#"
              x={269.5 * scale}
              y="0"
              width={26 * scale}
              height={160 * scale}
              className={`black-key ${
                highlightedKeys.includes("A#") ? "highlighted" : ""
              }`}
            />
          </svg>
        </Box>
      )}
    </div>
  )
}

export default PianoImage
