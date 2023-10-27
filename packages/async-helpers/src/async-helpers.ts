export const trap = async <T>(
  value: T,
): Promise<
  { success: false; error: unknown } | { success: true; data: Awaited<T> }
> => {
  try {
    const data = await value;
    return {
      data,
      success: true,
    };
  } catch (err) {
    const error =
      err ??
      new Error("'trap' recieved 'undefined' value, defaulting to new Error");
    return {
      error,
      success: false,
    };
  }
}

export const cage = <T extends unknown[], U>(handler: (...params: T) => U) => {
  return async function (
    ...params: T
  ): Promise<
    { success: false; error: unknown } | { success: true; data: Awaited<U> }
  > {
    try {
      const data = await handler(...params);
      return {
        data,
        success: true,
      };
    } catch (err) {
      const error =
        err ??
        new Error("'cage' recieved 'undefined' value, defaulting to new Error");
      return {
        error,
        success: false,
      };
    }
  };
}