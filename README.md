## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/screens/home/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Environments Variables

You must create this file in order to use some libraries in the project. In this project, we use [Supabase](https://supabase.io/) to handle the database work.

Go to the root directory of the project, create a file named `.env`.

```env
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
```

## Integrate PostgreSQL

After installing the whole project and setting the environments values, you can create the automatic schema by typing the following command on the command line.
```
npm run setupdb
```

## Thanks
- [Monaco Editor](https://github.com/microsoft/monaco-editor) - code editor framework
- [Icon Set](https://github.com/astrit/css.gg) - thanks to css.gg for the iconset
- [Supabase](https://supabase.io/) - database
- [Vercel](http://vercel.app/) - Next.js & clientside deployment
