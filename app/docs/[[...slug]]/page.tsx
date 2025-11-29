export default async function Docs({ params }: { params: Promise<{ slug: string[] }>; }) {
  const {slug} = await params;

  if (slug?.length === 2) {
    return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>;
  }

  if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
    if (slug.length > 2) {
    return (
      <>
        <h1>All Slugs:</h1>
        {slug.map((part, index) => (
          <h2 key={index}>{part}</h2>
        ))}
      </>
    );
  }

  return <h1>Docs Home Page</h1>;
}
