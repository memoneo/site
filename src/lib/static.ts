import { DEV, BASE_PATH } from "../constants/env"

export default function (path: string): string {
  return DEV ? `/static${path}` : `${BASE_PATH}/static${path}`
}
