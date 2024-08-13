import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./EsriMap'), {
  ssr: false,
})

export default async function Page() {
  return <DynamicMap />
}
