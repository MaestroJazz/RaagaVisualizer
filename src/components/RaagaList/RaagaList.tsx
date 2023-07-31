// RaagaList.tsx

import React, { useEffect, useState } from "react"
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { useRaagas } from "../RaagaContext"

const RaagaList: React.FC = () => {
  const context = useRaagas()

  if (!context) {
    // Context is not available yet, handle the loading state
    return <div>Loading...</div>
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Chakra</TableCell>
          <TableCell>Raaga</TableCell>
          <TableCell>Swaras</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {context.raagas.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.chakra}</TableCell>
            <TableCell>{item.raaga}</TableCell>
            <TableCell>{item.swaras.join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default RaagaList
