import { List, ListItem, Box } from "@mui/joy"
import { useRaagas } from "./RaagaContext"
import { Typography } from "@mui/material"

interface Props {
  selectedRaaga?: string
}

const WesternTranslation = ({ selectedRaaga }: Props) => {
  const context = useRaagas()
  const westernNotes = selectedRaaga
    ? context?.getWesternNotes(selectedRaaga)(context.raagas)
    : []

  return (
    <Box sx={{ paddingTop: 3 }}>
      {selectedRaaga && (
        <Typography variant="h6">Western Translation C-Based Scale:</Typography>
      )}
      {westernNotes && (
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          orientation="horizontal"
        >
          {selectedRaaga &&
            westernNotes.map((westernNote, index) => {
              return (
                <ListItem key={westernNote + index} value={westernNote}>
                  <div>
                    <Typography>{westernNote}</Typography>
                  </div>
                </ListItem>
              )
            })}
        </List>
      )}
    </Box>
  )
}

export default WesternTranslation
