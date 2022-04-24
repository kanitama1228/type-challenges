type MyAwaited<T extends Promise<unknown>> = _MyAwaited<T>
type _MyAwaited<T> = T extends Promise<infer U> ? _MyAwaited<U> : T
