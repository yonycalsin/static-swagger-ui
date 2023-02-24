import type { ConfigPresets } from './get-config-constants'

type PackageConfig = {
  preset?: ConfigPresets
  swaggerUiDistPackagePath?: string // this depends of the package manager
  swaggerUiDistTargetPath?: string
  openapiSpecPath?: string
  openapiSpecPublicPath?: string
}

type PresetConfig = Required<
  Pick<PackageConfig, 'swaggerUiDistTargetPath' | 'openapiSpecPath' | 'openapiSpecPublicPath'>
>
type Config = PackageConfig & PresetConfig

export type { Config, PackageConfig, PresetConfig }
