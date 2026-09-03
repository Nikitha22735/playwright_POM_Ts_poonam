import {expect, test} from "@playwright/test";
import fs from 'fs'


test('json Handling', async()=>{
   let stringData = fs.readFileSync('./testData/creds.json', 'utf-8') 
   let data = JSON.parse(stringData)
   console.log(data["positive"]["username"])
})



import {parse} from 'csv-parse/sync'
test('csv Handling', async()=>{
   let stringData = fs.readFileSync('./testData/credentails.csv', 'utf-8') 
   let data = parse(stringData, {columns:true,skip_empty_lines:true})
   console.log(data)
   
})

import XLSX from 'xlsx'
test('xlsx Handling', async()=>{
   let workbook = XLSX.readFile('./testData/sample_creds.xlsx') 
   let sheetData = workbook.Sheets["Sheet2"]

   let finalData = XLSX.utils.sheet_to_json(sheetData)
   console.log(finalData[2]["username1"])
   
})

// Set usname1=testuser&&Set pw1=testpass&&npx playwright test --grep @dh
test('CLI', async()=>{
 let usName_p = process.env.usname1
 console.log(process.env.pw1)
 console.log(usName_p)
   
})

import dotenv from 'dotenv'
test('env @dh', async()=>{
 dotenv.config({path:process.env.file})
 let usName_p = process.env.usname1
 console.log(process.env.pw1)
 console.log(usName_p)
   
})




