import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import AddToCart from './components/AddToCart'
import { getServerSession } from 'next-auth';
import { AuthOptions } from './api/auth/[...nextauth]/route';
import { Session } from 'inspector';
// {Session && <img src={ServerSession?.user!.image!}  alt="Flowers in Chania" > asd </img>}
   
export default async function Home() {
  const ServerSession = await getServerSession(AuthOptions)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>   
      Hello {Session && <span> {ServerSession?.user!.name} </span> } 
  
     </h1>
    <Link href='/users' className='btn btn-primary' > users </Link>
    <ProductCard/>
    </main>
  )
}
