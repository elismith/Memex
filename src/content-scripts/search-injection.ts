import 'babel-polyfill'
import { initSearchInjection } from '../search-injection/content_script'

export async function main() {
    initSearchInjection()
}

main()