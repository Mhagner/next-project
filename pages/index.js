
import { Card } from '../components/Card'
import { lista } from '../data'

export default function Home() {
  return (
    <div className="container">
       <Card lista={lista} /> 
    </div>
  )
}
