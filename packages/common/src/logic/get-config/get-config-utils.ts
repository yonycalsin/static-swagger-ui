import fs from 'fs'

import { PROJECT_PACKAGE_PATH } from '../../shared/constants'

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

export { parsePackageJson, readPackageJsonContent }
