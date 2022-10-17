import { useState } from 'react'
import Statistics from "../components/statistics";
import Navbar from '../components/navbar';
import ChallengeBoard from '../components/challengeBoard';

export default function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Statistics />
    <ChallengeBoard />
  </>
  )
}
