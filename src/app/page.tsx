import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile( `${ process.cwd() }/data/item.json`, 'utf8' )
  const data = JSON.parse( file )
  const item = data.Results
  console.log(item)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border-2 border-amber-400">
        main
      </main>
      <div>{ [item] }</div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-2 border-blue-400">footer</footer>
    </div>
  );
}
