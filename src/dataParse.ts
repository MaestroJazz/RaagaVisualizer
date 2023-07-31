import * as fs from 'fs';
import * as csv from 'csv-parser';

interface Data {
  notes: string[];
  chakra: string;
  raaga: string;
}

const dataArray: Data[] = [];

fs.createReadStream('raagas.csv')
  .pipe(csv())
  .on('data', (row: { [key: string]: string }) => {
    const { notes, chakra, raaga } = row;
    const data: Data = {
      notes: notes.split(', '),
      chakra,
      raaga,
    };
    dataArray.push(data);
  })
  .on('end', () => {
    console.log(dataArray);
  });
