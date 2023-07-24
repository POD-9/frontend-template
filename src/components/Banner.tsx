import React from 'react'
import Mask from '/images/Mask-Group.svg'
import { BannerInterface } from '../common/types'

const Banner = (props: BannerInterface) => {
  const {header, subHeader} = props
  return (
    <section className="bg-white h-96 pattern-bg flex flex-col justify-center items-end p-3">
      <h1 className="text-4xl font-extrabold max-w-[600px] text-center sm:text-left sm:text-6xl">{header}</h1>
      <h6 className="max-w-[600px] mt-4 text-center sm:text-left">{subHeader}</h6>
    </section>
  )
}

export default Banner