/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getConfig, PROJECT_DIR } from '@static-swagger-ui/common'
import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import yaml from 'yaml'

const INSOMNIA_API_SPEC_DIR = path.join(PROJECT_DIR, '.insomnia', 'ApiSpec')

async function generateOpenapiSpec(output: string) {
  const config = await getConfig()

  const [insomniaApiSpecFile] = await fs.readdir(INSOMNIA_API_SPEC_DIR)

  if (!insomniaApiSpecFile) {
    console.log(chalk.red('There is no a spec file'))

    return
  }

  const insomniaApiSpecPath = path.join(INSOMNIA_API_SPEC_DIR, insomniaApiSpecFile)

  const insomniaApiSpecContent = await fs.readFile(insomniaApiSpecPath, 'utf-8')

  const insomniaApiSpecYaml = yaml.parse(insomniaApiSpecContent)

  await fs.ensureFile(output ?? config.openapiSpecPublicPath!)

  await fs.writeFile(output ?? config.openapiSpecPublicPath!, insomniaApiSpecYaml.contents, 'utf-8')

  console.log(chalk.green('The openapi.yaml was generated successfully'))
}

export default generateOpenapiSpec
