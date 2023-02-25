import { Command } from 'commander'
import figlet from 'figlet'

import { generateOpenapiSpec } from './logic/generate-openapi-spec'

const program = new Command()

figlet('Static Swagger Ui', function (err, data) {
  if (err) {
    console.log('Something went wrong...')

    console.dir(err)

    return
  }

  console.log(data)
})

program.name('@static-swagger-ui/insomnia-cli').description('CLI for tools with insomnia')

program
  .command('generate-openapi-spec')
  .description('Generate the openapi.yaml based on the insomnia specs')
  .argument('<string>', 'Output path')
  .action(async (output) => {
    await generateOpenapiSpec(output)
  })

program.parse()
