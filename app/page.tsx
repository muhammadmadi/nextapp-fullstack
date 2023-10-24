import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import AddToCart from './components/AddToCart'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>   Hello world</h1>
    <Link href='/users' > users </Link>
    <ProductCard/>
    </main>
  )
}
