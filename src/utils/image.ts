export interface IImageSize {
  width: number
  height: number
}

export const getImageSize = async (src: string): Promise<IImageSize> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = () => {
      resolve({
        width: -1,
        height: -1,
      })
    }
  })
}
