#!/usr/bin/env node

import { generateStaticDist, setOpenapiFile } from '@static-swagger-ui/core'
import { program } from 'commander'
import figlet from 'figlet'

figlet.textSync('Static Swagger Ui')

program
  .name('@static-swagger-ui')
  .description('The cli for the static-swagger-ui')
  .command('init')
  .action(async () => {
    await generateStaticDist()

    await setOpenapiFile()
  })
