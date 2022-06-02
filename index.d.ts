export declare function graceAsyncError<D>(
  fn: (...args: any[]) => Promise<D>,
  ...args: any[]
): Promise<[any, D | null]>;
