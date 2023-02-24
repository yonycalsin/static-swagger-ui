import { PACKAGE_CONFIG_PROPERTY, PACKAGE_DEFAULT_CONFIG, PRESET_CONFIGS } from './get-config-constants'
import type { PackageConfig } from './get-config-types'
import { parsePackageJson, readPackageJsonContent } from './get-config-utils'

async function getConfig() {
  const packageJsonContent = await readPackageJsonContent()

  const packageJson = parsePackageJson(packageJsonContent)

  const packageConfig = {
    ...packageJson[PACKAGE_CONFIG_PROPERTY],
    ...PACKAGE_DEFAULT_CONFIG,
  } as PackageConfig

  const config = packageConfig

  if (packageConfig.preset) {
    const presetConfig = PRESET_CONFIGS[packageConfig.preset]

    Object.assign(config, presetConfig)
  }

  return config
}

export default getConfig
