### Async Helpers 🍐

I am a big believer in [errors as values](https://go.dev/blog/errors-are-values) which Javascript can absolutely support if your willing to return errors instead of `throw` them.

The other reason I like to handle errors this way is it allows the use of `throw` to be reserved for eliminating certain types from a functions return value.

This is useful in instances where you might want to [throw a redirect](https://sergiodxa.com/articles/throwing-vs-returning-responses-in-remix) which returns a `void` value that you do not want to check for as part of your function return values.