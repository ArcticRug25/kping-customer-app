export function getErrorMessage(message: any) {
  if (typeof message === 'string') {
    return message
  }
  const errorMsg: any = Object.values(message).reduce((prev: any, next: any) => {
    prev.push(...next)
    return prev
  }, [])

  return errorMsg[0]
}
