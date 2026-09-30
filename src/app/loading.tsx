export default function Loading() {
  return (
    <div className="container-page py-16">
      <div className="skeleton mb-4 h-3 w-24" />
      <div className="skeleton mb-12 h-12 w-80" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <div className="skeleton aspect-4/5" />
            <div className="skeleton mt-4 h-3 w-3/4" />
            <div className="skeleton mt-2 h-3 w-1/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
