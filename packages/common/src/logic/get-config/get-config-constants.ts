import path from 'path'

import type { PackageConfig, PresetConfig } from './get-config-types'

enum ConfigPresets {
  NEXT_API_ROUTES = 'next-api-routes',
}

const PACKAGE_DEFAULT_CONFIG: PackageConfig = {
  preset: ConfigPresets.NEXT_API_ROUTES,
}

const PACKAGE_CONFIG_PROPERTY = 'staticSwaggerUi'

const PRESET_CONFIGS: Record<ConfigPresets, PresetConfig> = {
  [ConfigPresets.NEXT_API_ROUTES]: {
    swaggerUiDistTargetPath: path.join('public', 'swagger'),
  },
}

export { ConfigPresets, PACKAGE_CONFIG_PROPERTY, PACKAGE_DEFAULT_CONFIG, PRESET_CONFIGS }
