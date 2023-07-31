import axios from "axios"
import React, { ReactNode, useContext, useEffect, useState } from "react"

type RaagaContextValue = {
  raagas: any[]
  chakras: any[]
  getWesternNotes: (selectedRaaga: string) => (raagaData: any[]) => string[]
  loading: boolean
}
const RaagaContext = React.createContext<RaagaContextValue>({
  raagas: [],
  chakras: [],
  getWesternNotes: () => () => [],
  loading: true,
})

interface RaagaProviderProps {
  children: ReactNode
}

interface Translations {
  [key: string]: string[]
}

export const useRaagas = () => {
  const context = useContext(RaagaContext)

  if (context.loading) {
    return null
  }

  return context
}

export const RaagaProvider: React.FC<RaagaProviderProps> = ({ children }) => {
  const [tableData, setTableData] = useState<RaagaContextValue>({
    raagas: [],
    chakras: [],
    getWesternNotes: () => () => [],
    loading: true,
  })

  const extractChakras = (raagaData: any[]) => {
    let chakras: string[] = []
    raagaData
      .map((r: { chakra: any }) => r.chakra)
      .forEach((c: string) => {
        if (!chakras.includes(c)) {
          chakras.push(c)
        }
      })
    return chakras
  }

  const getWesternNotes =
    (selectedRaaga: string) =>
    (raagaData: any[]): string[] => {
      const translations: Translations = {
        Ri: ["C#", "D", "D#"],
        Ga: ["D", "D#", "E"],
        Ma: ["F", "F#"],
        Da: ["G#", "A", "A#"],
        Ni: ["A", "A#", "B"],
      }
      let westernNotes: string[] = []
      raagaData.forEach((raaga) => {
        if (raaga.raaga === selectedRaaga) {
          westernNotes.push("C")
          raaga.swaras.map((swara: string) => {
            let mainSwara = swara.substring(0, 2)
            if (mainSwara === "Da") {
              westernNotes.push("G")
            }
            westernNotes.push(translations[mainSwara][+swara.substring(2) - 1])
          })
          westernNotes.push("C")
        }
      })
      return westernNotes
    }

  useEffect(() => {
    // Fetch the JSON data using Axios
    axios
      .get("/data/raagas.json")
      .then((response: { data: React.SetStateAction<any[]> }) => {
        const result: RaagaContextValue = {
          raagas: response.data as any[],
          chakras: extractChakras(response.data as any[]),
          getWesternNotes: getWesternNotes,
          loading: false,
        }

        setTableData(result)
      })
      .catch((error: any) => {
        console.error("Error loading JSON data:", error)
      })
  }, [])

  return (
    <RaagaContext.Provider value={tableData}>{children}</RaagaContext.Provider>
  )
}
