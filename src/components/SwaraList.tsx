import { List, ListItem, Box } from "@mui/joy"
import { useRaagas } from "./RaagaContext"
import { Typography } from "@mui/material"

interface Props {
  selectedRaaga?: string
}

const SwaraList = ({ selectedRaaga }: Props) => {
  const context = useRaagas()
  let swarasList: string[] = []
  context?.raagas.map((raaga) => {
    if (raaga.raaga === selectedRaaga) {
      swarasList.push("Sa")
      raaga.swaras.map((swara: any) => {
        if (swara.substring(0, 2) === "Da") {
          swarasList.push("Pa")
        }
        swarasList.push(swara)
      })
      swarasList.push("Sa")
    }
  })

  return (
    <Box sx={{ paddingTop: 3 }}>
      {selectedRaaga && <Typography variant="h6">Swaras:</Typography>}
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
          swarasList.map((swara, index) => {
            return (
              <div>
                <ListItem key={swara + index} value={swara}>
                  <Typography>{swara}</Typography>
                </ListItem>
              </div>
            )
          })}
      </List>
    </Box>
  )
}

export default SwaraList
