import { useAppSelector } from "../hooks/redux"

export function FavouritesPage() {
    const { favourites } = useAppSelector(state => state.github)

    if (!favourites.length) return <p className="text-center">No items</p>

    return (
        <>
            {/* <h1 className='flex justify-center pt-5 font-bold text-2xl'>List of Favourites</h1> */}
            <div className='flex justify-center pt-5 mx-auto h-screen w-screen overflow-y-scroll'>
                <ul className="list-none">
                    {favourites.map(f => (
                        <a
                            href={f}
                            key={f}
                            target='_blank'>
                            <li
                                className="border py-2 px-4 my-2  hover:shadow-md"
                                key={f}>
                                {f.replace('https://github.com/', '')}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    )
}