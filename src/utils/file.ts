import { saveAs } from 'file-saver'
import { uniqueId } from 'lodash-es'

export const downloadFile = ({
  url,
  filename,
  type,
}: {
  url: string
  filename?: string
  type?: string
}) => {
  if (!filename?.length && type?.length && type.includes('/')) {
    const ext = type.split('/')[1]
    filename = `${uniqueId('unknown_')}.${ext === 'jpeg' ? 'jpg' : ext}`
  }

  saveAs(url, filename)
}
