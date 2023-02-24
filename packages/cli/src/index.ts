#!/usr/bin/env node

import { generateStaticDist, setOpenapiFile } from '@static-swagger-ui/core'
import figlet from 'figlet'

async function main() {
  figlet.textSync('Static Swagger Ui')

  await generateStaticDist()

  await setOpenapiFile()
}

main()
