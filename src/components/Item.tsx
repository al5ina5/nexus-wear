import Link from "next/link";
import React from "react";

type ItemProps = {
    id: string
    name: string
    image: string
    price: number
    totalSupply: number
}

export function Item({ id, name, image, price, totalSupply }: ItemProps) {
    return <>
        <Link href={`/catalog/${id}`} className="border-4 flex flex-col group">
            <div>
                <img className="grow-0 flex-none p-12 w-full" src={image} alt="" />
            </div>
            <div className="flex-1" />
            <div className="flex gap-6 flex-col md:flex-row bg-white text-neutral-900 p-6">
                <div className="flex-1 space-y-2">
                    <p>{name}</p>
                    <p>{totalSupply} AVAILABLE &bull; {price} FANTOM</p>
                </div>
                <div>
                    <Link className="group-hover:bg-white group-hover:text-neutral-900 group-hover:border-neutral-900 border-2 border-neutral-900 bg-neutral-900 text-white p-3 inline-block" href={`/catalog/${id}`}>PURCHASE</Link>
                </div>
            </div>
        </Link>
    </>;
}
