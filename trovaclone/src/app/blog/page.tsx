import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { slug: 'packing-tips', title: '10 Packing Tips for Group Trips' },
    { slug: 'budgeting', title: 'How to Budget for Your Next Adventure' },
    { slug: 'meet-hosts', title: 'Meet Our Top Hosts' },
  ]
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={{ pathname: '/blog/[slug]', query: { slug: p.slug } }}
            className="rounded-lg border p-6 hover:shadow"
          >
            <div className="h-40 rounded bg-gray-100 mb-3" />
            <div className="font-semibold">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
