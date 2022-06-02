export async function graceAsyncError(fn, ...args) {
    try {
      const result = await fn(...args)
      return [null, result]
    } catch(error) {
      return [error, null]
    }
  }
  