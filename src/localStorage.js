export let setItemParsed = (key, item) => {
  if (item !== undefined) localStorage.setItem(key, JSON.stringify(item))
}
export let getItemParsed = (key) => {
  let res = localStorage.getItem(key);
  if (res != null) return JSON.parse(res)
  else return undefined
}
