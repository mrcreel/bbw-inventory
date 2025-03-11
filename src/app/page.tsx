/* eslint-disable react/react-in-jsx-scope */
export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-black bg-teal-200">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border-2 border-black bg-amber-200">
        main
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-2 border-black bg-red-200">
        footer
      </footer>
    </div>
  )
}
