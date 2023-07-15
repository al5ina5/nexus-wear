import { Item } from './../components/Item';
import { items } from '../data/items'

export default function Home() {
    return (
        <>


            <div className="max-w-7xl mx-auto p-12">
                <div className="max-w-3xl mx-auto">
                    <Item {...items[0]} />
                </div>
            </div>
        </>
    )
}
