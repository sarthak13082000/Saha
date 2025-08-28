export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Blog: {params.slug.replace(/-/g, ' ')}</h1>
      <div className="mt-4 prose max-w-none">
        <p>This is a placeholder blog post page. Replace with your CMS integration.</p>
      </div>
    </div>
  )
}
