
export const useUtils = () => {
  function getImageUrl(path: string, name: string): string {
    return new URL('../' + path +'/'+ name, import.meta.url).href
  }

  return {
    getImageUrl
  }
}