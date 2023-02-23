import React from 'react'
import MemberRow from './MemberRow'

import Apollonas from '../public/members/apollonas.jpg'
import Malfas from '../public/members/malfas.jpg'
import Leo from '../public/members/leo.jpg'
import Mxls from '../public/members/mxls.jpg'

function Members() {
  return (
    <div className='my-10 max-w-[1920px]'>
        <MemberRow Image={Apollonas.src} Name='Apollonas Mantas' Quote='~ I started parkour as a form of playing a game, i continued.' Inverted={false}  />
        <MemberRow Image={Mxls.src} Name='Ilias Mihalas' Quote='~ I know you blind man, but you gotta see this!' Inverted={true}  />
        <MemberRow Image={Malfas.src} Name='Ilias Malfas' Quote='~ Bkick the world' Inverted={false}  />
        <MemberRow Image={Leo.src} Name='Leo Andreopoulos' Quote='~ Normal people fear being on top of the building but we are not normal.' Inverted={true}  />
    </div>
  )
}

export default Members