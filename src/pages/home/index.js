import React from 'react'
import {Navbar} from "../../components/navbar";
import {HomePreview} from "./home-preview";
import {HomePoster} from "./home-poster";
import {HomeExplore} from "./home-explore";
import {HomeClients} from "./home-clients";
import {HomeInsight} from "./home-insight";
import {HomePromise} from "./home-promise";
import {HomeRedundant} from "./home-redundant";
import {HomeHow} from "./home-how";
import {HomeAdvantages} from "./home-advantages";
import {HomePricing} from "./home-pricing";
import {HomeFooter} from "./home-footer";
import {HomeEventList} from "./home-event-list";


const HomePage = () => {

  return (
    <div>
      <Navbar/>
      <HomePreview/>
      <HomePoster/>
      <HomeExplore/>
      <HomeClients/>
      <HomeInsight/>
      <HomePromise/>
      <HomeRedundant/>
      <HomeHow/>
      <HomeEventList />
      <HomeAdvantages/>
      <HomePricing/>
      <HomeFooter/>
    </div>
  )
}

export {
  HomePage
}