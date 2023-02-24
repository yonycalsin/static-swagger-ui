import type { PM } from 'detect-package-manager'
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
    openapiSpecPath: path.join('public', 'swagger', 'openapi.yaml'),
    openapiSpecPublicPath: './openapi.yaml',
  },
}

const SWAGGER_UI_DIST_PACKAGE_VERSION = '4.15.5'

const SWAGGER_UI_DIST_PACKAGE_PATHS_BY_PM: Record<PM, string> = {
  npm: path.join('node_modules', 'swagger-ui-dist'),
  pnpm: path.join(
    'node_modules',
    '.pnpm',
    `swagger-ui-dist@${SWAGGER_UI_DIST_PACKAGE_VERSION}`,
    'node_modules',
    'swagger-ui-dist',
  ),
  yarn: path.join('node_modules', 'swagger-ui-dist'),
}

export {
  ConfigPresets,
  PACKAGE_CONFIG_PROPERTY,
  PACKAGE_DEFAULT_CONFIG,
  PRESET_CONFIGS,
  SWAGGER_UI_DIST_PACKAGE_PATHS_BY_PM,
}
