import type { ConfigPresets } from './get-config-constants'

type PackageConfig = {
  preset?: ConfigPresets
  swaggerUiDistPackagePath?: string // this depends of the package manager
  swaggerUiDistTargetPath?: string
}

type PresetConfig = Pick<PackageConfig, 'swaggerUiDistTargetPath'>

type Config = PackageConfig & PresetConfig

export type { Config, PackageConfig, PresetConfig }
