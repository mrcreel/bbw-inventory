import ItemCard from './components/ItemCard/page'
import ItemsTableUI from './components/ItemsTableUI/page'
import SearchBar from './components/SearchBar/page'

/* eslint-disable react/react-in-jsx-scope */
export default async function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-baseline w-full px-4 py-1 border border-black bg-amber-200">
      src/app/page.tsx
      <div className="flex flex-col flex-auto w-full p-1 border border-black bg-emerald-200">
        Items Page
        <div className="flex flex-col flex-auto overflow-y-scroll resize-y p-1 border border-black w-full bg-pink-200">
          <p className="bg-white">Top</p>
          <div className="flex-auto  resize-y border border-black w-full bg-slate-200">
            <ItemsTableUI />
          </div>
        </div>
        <div className="flex flex-col flex-auto border border-black w-full bg-indigo-200">
          <p className="bg-white">Bottom</p>
          <div className="flex flex-col flex-auto border border-black h-full">
            <div className="">
              <SearchBar />
            </div>
            <div className="flex-auto bg-fuchsia-200">
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
