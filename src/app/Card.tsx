"use client";
import Image from "next/image";

export function Card(props: { icon: string; title: string; desc: string; content: string; }) {
    const {icon, title, desc, content} = props;
    return (
        <div
            className="flex flex-col h-60 w-60 bg-[#FD7E5E] bg-gradient-to-t border-[#3D1D00] rounded overflow-hidden shadow-lg justify-center p-4 m-auto hover:transition-shadow hover:shadow-xl">
            <a href={content} target="_blank" rel="noopener noreferrer">
                <Image className="rounded-xl" src={icon} alt={title} height={30} width={60}/>
                <div className="py-4">
                    <p className="text-[#3D1D00] font-bold text-xl mb-2">{title}</p>
                    <p className="text-[#3D0D01] text-base">
                        {desc}
                    </p>
                </div>
            </a>
        </div>
    )
}

Card.defaultProps = {
    icon: null,
    title: "Title",
    desc: "Description",
    content: "link to content"
}

export default Card;