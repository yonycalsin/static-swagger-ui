import { getConfig } from '@static-swagger-ui/common'
import fs from 'fs-extra'

async function generateStaticDist() {
  const config = await getConfig()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  await fs.copy(config.swaggerUiDistPackagePath!, config.swaggerUiDistTargetPath!)
}

export default generateStaticDist
