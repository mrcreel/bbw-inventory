import React from 'react'

/*
import ItemCard from './components/ItemCard/page'
import DemoPage from './components/ItemsTable/page'
import SearchBar from './components/SearchBar/page'
*/

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row grow border border-black bg-red-500 ">
      <div className="grow p-1 md:w-[63%] border border-black bg-black"></div>
      <div className="grow p-1 md:w-[37%] md:min-w-[450px] border border-black bg-white"></div>
      {/*
      <div className="flex flex-row flex-auto w-full h-full p-1  bg-emerald-200">
        <div className="flex flex-col flex-auto w-[50%] overflow-y-scroll resize-y p-1 border border-black bg-pink-200">
          {/*
          <div className="flex-auto h-full resize-y border border-black w-full bg-slate-700">\
            <DemoPage />
          </div>
        </div>
        <div className="flex flex-col flex-auto w-[50%] p-1 border border-black bg-indigo-200">
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
        */}
    </main>
  )
}
