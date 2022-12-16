import React from 'react'
import Mask from '../../public/images/Mask-Group.svg'
import { BannerInterface } from '../common/types'

const Banner = (props: BannerInterface) => {
  const {header, subHeader} = props
  return (
    <section className="bg-white h-96 pattern-bg flex flex-col justify-center items-end">
      <h1 className="text-6xl font-extrabold max-w-[600px]">{header}</h1>
      <h6 className="max-w-[600px] mt-4">{subHeader}</h6>
    </section>
  )
}

export default Banner