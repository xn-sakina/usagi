export const base64ToUrl = async (base64: string) => {
  const blob = await (await fetch(base64)).blob()
  return URL.createObjectURL(blob)
}
