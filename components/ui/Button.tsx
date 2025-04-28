import React from 'react'

export const Button = ({title, icon, position, otherClasses}:{
    title: string; icon: React.ReactNode, position:string; handleClick?:()=> void; otherClasses?:string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden w-full rounded-lg p-[1px] md:w-60 md:mt-10 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex h-full w-full cursor-pointer items-center font-bold justify-center rounded-lg gap-2 bg-slate-950 px-7  text-sm  text-white backdrop-blur-3xl ${otherClasses}`}>
    {position === "left" && icon}
    {title && title}
    {position === "right" && icon}
  </span>
</button>
    </div>
  )
}
