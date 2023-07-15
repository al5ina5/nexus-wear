import { Item } from "@/components/Item";
import { items } from "@/data/items";

export default function Home() {
    return (
        <>
            <div className="max-w-7xl mx-auto p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    {items.map(((item, index) => {
                        return <Item {...item} />
                    }))}
                </div>
            </div>
        </>
    )
}
