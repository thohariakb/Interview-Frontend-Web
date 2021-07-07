import Head from 'next/head'
import Sidebard from '../components/Sidebar';
import CardQuestion1 from '../components/CardQuestion1';

export default function Home() {
  return (
    <div className="mb-5">
        <Sidebard/>
        <CardQuestion1/>
    </div>
  )
}
