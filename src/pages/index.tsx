// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import PackingList from './qcomps/props_item'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Gallery from './qcomps/gallery_props'
import Bios from './qcomps/bios'
export default function Home() {
  return (
    <div>
    <PackingList />
    <Profile />
    <MyComp />
    <Gallery />
    <Bios />
    </div>
  )
}
