export default function DestinationDetails({ params }: { params: { slug: string } }) {
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Destination: {params.slug}</h1>
      <p className="mt-2 text-gray-600">Explore trips to {params.slug}.</p>
    </div>
  )
}
