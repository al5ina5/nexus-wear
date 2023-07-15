import { items } from "@/data/items"


export default function Page({ params }) {
    const data = items.find(item => item.id === params.id)
    return <div className="max-w-7xl mx-auto p-12 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-2">
                <img src={data?.image} alt="" />
            </div>
            <div className="space-y-12">
                <div className="space-y-2">
                    <p>{data?.name}</p>
                    <p>{data?.totalSupply} AVAILABLE</p>
                    <p>{data?.price} FANTOM</p>
                </div>

                <div>
                    {data?.description}
                </div>

                <div>
                    <button className="bg-white text-neutral-900 p-3 inline-block">PURCHASE</button>
                </div>
            </div>
        </div>
    </div >
}