import path from 'path'

const PROJECT_DIR = process.cwd()

const PROJECT_PACKAGE_PATH = path.join(PROJECT_DIR, 'package.json')

export { PROJECT_DIR, PROJECT_PACKAGE_PATH }
