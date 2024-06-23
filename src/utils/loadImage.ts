// TODO: accept string instead of URL
export const loadImage = function (url: URL, onloadFunc: () => void): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = onloadFunc
    image.onerror = reject
    image.src = url.href
    resolve(image)
  })
}
