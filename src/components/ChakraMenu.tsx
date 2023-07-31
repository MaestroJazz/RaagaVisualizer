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
  handleSelect: (value: string | undefined) => void
}

const ChakraMenu = ({ handleSelect }: Props) => {
  const [selectedChakra, setSelectedChakra] = useState<string>("")
  const context = useRaagas()

  return (
    <>
      <Container maxWidth="md" sx={{ padding: 5 }}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="chakra-select-label">Chakra</InputLabel>
            <Select
              labelId="chakra-select-label"
              id="chakra-select"
              value={selectedChakra}
              label="Chakra"
              onChange={(e) => {
                handleSelect(e.target.value)
                setSelectedChakra(e.target.value)
              }}
            >
              <MenuItem value="Any">Any</MenuItem>
              {context?.chakras.map((chakra) => (
                <MenuItem value={chakra}>{chakra}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Container>
    </>
  )
}

export default ChakraMenu
