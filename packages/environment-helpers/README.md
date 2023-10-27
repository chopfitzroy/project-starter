### Environment Helpers ⛰️

Typing environment variables is hard and there are a ton of different ways to do it.

I want big ugly errors when I am missing environment variables so I have taken a heavy handed approach and used [Zod](https://zod.dev/) to validate all environment variables to quickly surface issues.