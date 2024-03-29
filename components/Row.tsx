import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import CircularThumbnail from './CircularThumbnail'
import ModalComponent from './ModalComponent'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: any //fix later
  type: string
}


function Row({ title, movies, type }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)


  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  

  return (
    <div className="h-48 md:h-40 space-y-1 md:space-y-4 ">
      <h2 className="w-56 py-1 md:py-0 cursor-pointer text-l font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide md:space-x-4 md:p-2"
          ref={rowRef}
        >
          {type === 'square'
            ? movies.map(
                (
                  e: {
                    name: string
                    designation: string
                    detail: string
                    imageUrl: string
                    startDate: string
                    endDate:string
                    source:string
                  },
                  i: any
                ) => (
                  <Thumbnail
                    name={e.name}
                    designation={e.designation}
                    detail={e.detail}
                    imageUrl={e.imageUrl}
                    key={i}
                    source={e.source}
                    startDate={e.startDate}
                    endDate={e.endDate}
                  />
                )
              )
            : movies.map(
                (
                  e: {
                    name: string
                    designation: string
                    detail: string
                    imageUrl: string
                  },
                  i: any
                ) => (
                  <CircularThumbnail
                    name={e.name}
                    designation={e.designation}
                    detail={e.detail}
                    imageUrl={e.imageUrl}
                    key={i}
                    id={i+1}
                  />
                )
              )}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row