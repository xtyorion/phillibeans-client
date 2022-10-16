import { useState } from 'react'
import Hero from "../components/hero";
import Navbar from '../components/navbar';
import SectionTitle from "../components/sectionTitle";
import './Home.css'
import Benefits from "../components/benefits";
import { benefitOne, benefitTwo } from "../components/data";

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <SectionTitle
      pretitle="Nextly Benefits"
      title=" Why should you use this landing page">
      Nextly is a free landing page & marketing website template for startups
      and indie projects. Its built with Next.js & TailwindCSS. And its
      completely open-source.
    </SectionTitle>
    <Benefits data={benefitOne} />
    <Benefits imgPos="right" data={benefitTwo} />
  </>
  )
}
