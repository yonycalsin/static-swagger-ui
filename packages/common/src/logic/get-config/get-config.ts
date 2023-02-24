import { PACKAGE_CONFIG_PROPERTY, PACKAGE_DEFAULT_CONFIG, PRESET_CONFIGS } from './get-config-constants'
import type { PackageConfig } from './get-config-types'
import {
  getSwaggerUiDistPackagePathBaseOnPackageManager,
  parsePackageJson,
  readPackageJsonContent,
} from './get-config-utils'

async function getConfig() {
  const packageJsonContent = await readPackageJsonContent()

  const packageJson = parsePackageJson(packageJsonContent)

  const packageConfig = {
    ...packageJson[PACKAGE_CONFIG_PROPERTY],
    ...PACKAGE_DEFAULT_CONFIG,
  } as PackageConfig

  const config = packageConfig

  if (config.preset) {
    const presetConfig = PRESET_CONFIGS[config.preset]

    if (!presetConfig) {
      throw new Error(`The preset "${config.preset}" is not supported`)
    }

    if (!config.swaggerUiDistTargetPath) {
      config.swaggerUiDistTargetPath = presetConfig.swaggerUiDistTargetPath
    }

    if (!config.openapiSpecPath) {
      config.openapiSpecPath = presetConfig.openapiSpecPath
    }

    if (!config.openapiSpecPublicPath) {
      config.openapiSpecPublicPath = presetConfig.openapiSpecPublicPath
    }
  }

  const swaggerUiDistPackagePath = await getSwaggerUiDistPackagePathBaseOnPackageManager()

  if (!config.swaggerUiDistPackagePath) {
    config.swaggerUiDistPackagePath = swaggerUiDistPackagePath
  }

  return config
}

export default getConfig
