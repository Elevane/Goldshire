import DealCard from "~/features/Deal/DealCard"
import useDeals from "~/hooks/use-deals"

export default function Home() {
  const { data, isLoading } = useDeals()

  if (isLoading) {
    return <p className="m-5">Loading...</p>
  }

  return (
    <div className="p-5">
      <h1 className="mb-5 text-2xl font-bold">Good deals</h1>
      <section className="flex flex-wrap justify-center gap-4">
        {data
          ?.sort((a, b) => a.profitRate - b.profitRate)
          .map((deal) => (
            <div key={deal.itemId} className="flex-shrink-0">
              <DealCard {...deal} />
            </div>
          ))}
      </section>
    </div>
  )
}