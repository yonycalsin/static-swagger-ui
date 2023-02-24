/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getConfig, PROJECT_DIR } from '@static-swagger-ui/common'
import fs from 'fs-extra'
import path from 'path'

async function setOpenapiFile() {
  const config = await getConfig()

  const existsOpenApiSpec = await fs.exists(config.openapiSpecPath!)

  if (!existsOpenApiSpec) {
    throw new Error(`The openapi spec file does not exist`)
  }

  const swaggerInitializerPath = path.join(PROJECT_DIR, config.swaggerUiDistTargetPath!, 'swagger-initializer.js')

  let swaggerInitializerContent = await fs.readFile(swaggerInitializerPath, 'utf-8')

  swaggerInitializerContent = swaggerInitializerContent.replace(
    'https://petstore.swagger.io/v2/swagger.json',
    config.openapiSpecPublicPath!,
  )

  await fs.writeFile(swaggerInitializerPath, swaggerInitializerContent)
}

export default setOpenapiFile
