export const useUtils = () => {
  function getImageUrl(path: string, name: string): string {
    const dir = import.meta.env.PROD ? '' : '../../public/'
    return new URL(dir + path + '/' + name, import.meta.url).href
  }

  return {
    getImageUrl,
  }
}
