import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Stack,
} from "@mui/material"
import { useRaagas } from "./RaagaContext"
import { useState } from "react"

interface Props {
  selectedChakra?: string
  handleSelect: (value: string | undefined) => void
}

const RaagaMenu = ({ selectedChakra, handleSelect }: Props) => {
  const [selectedRaaga, setSelectedRaaga] = useState<string>("")
  const context = useRaagas()

  return (
    <>
      <Container maxWidth="md" sx={{ padding: 5 }}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="raaga-select-label">Raaga</InputLabel>
            <Select
              labelId="raaga-select-label"
              id="raaga-select"
              value={selectedRaaga}
              label="Raaga"
              onChange={(e) => {
                handleSelect(e.target.value)
                setSelectedRaaga(e.target.value)
              }}
            >
              {(!selectedChakra || selectedChakra === "Any") &&
                context?.raagas.map((raaga) => (
                  <MenuItem value={raaga.raaga}>{raaga.raaga}</MenuItem>
                ))}
              {selectedChakra &&
                context?.raagas.map((raaga) => {
                  if (raaga.chakra === selectedChakra) {
                    return (
                      <MenuItem value={raaga.raaga}>{raaga.raaga}</MenuItem>
                    )
                  }
                })}
            </Select>
          </FormControl>
        </Stack>
      </Container>
    </>
  )
}

export default RaagaMenu
