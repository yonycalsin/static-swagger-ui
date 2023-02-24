import { detect } from 'detect-package-manager'
import fs from 'fs'

import { PROJECT_PACKAGE_PATH } from '../../shared/constants'

import { SWAGGER_UI_DIST_PACKAGE_PATHS_BY_PM } from './get-config-constants'

async function readPackageJsonContent() {
  try {
    return fs.readFileSync(PROJECT_PACKAGE_PATH, 'utf-8')
  } catch (error) {
    console.error(error)

    return '{}'
  }
}

function parsePackageJson(content: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return JSON.parse(content) as Record<string, any>
  } catch (error) {
    console.error(error)

    return {}
  }
}

async function getSwaggerUiDistPackagePathBaseOnPackageManager() {
  const pm = await detect()

  return SWAGGER_UI_DIST_PACKAGE_PATHS_BY_PM[pm]
}

export { getSwaggerUiDistPackagePathBaseOnPackageManager, parsePackageJson, readPackageJsonContent }
