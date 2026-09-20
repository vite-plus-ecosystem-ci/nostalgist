import fs from 'node:fs'
import path from 'node:path'
import { createConfig } from '@arianrhodsandlot/vite-plus-config'
import pkg from './package.json' with { type: 'json' }

const entries = await fs.promises.readdir(path.join('src', 'entries'))

export default createConfig({
  pack: {
    format: Object.fromEntries(
      entries.map((entry) => [path.parse(entry).name, { entry: { [pkg.name]: path.join('src', 'entries', entry) } }]),
    ),
    globalName: `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`,
  },
})
