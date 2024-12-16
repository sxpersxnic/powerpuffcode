# Next Boilerplate Template

## Get started

```sh
npx create-next-app@latest <project-name> --example "https://github.com/sxpersxnic/Next-Boilerplate"

# or

git clone https://github.com/sxpersxnic/Next-Boilerplate.git
```

## Set up database

Run:

```sh
bun orm
```

This will ask which orm to setup (drizzle, prisma, supabase). Yes Supabase is not an orm but i just added it to orms to keep it simple.

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

### In existing projects

To add support for Docker to an existing project, just copy the [`Dockerfile`](https://github.com/sxpersxnic/Next-Boilerplate/tree/main/Dockerfile) into the root of the project and add the following to the `next.config.ts` file:

```js
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;

```

This will build the project as a standalone app inside the Docker image.
