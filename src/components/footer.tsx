export default function Footer({
  daysLeft,
  currentYear,
  setCurrentYear
}: {
  daysLeft: number
  currentYear: number
  setCurrentYear: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <footer className="text-foreground-muted mt-8 flex w-full items-center justify-between text-xs">
      <div className="flex items-center justify-between">
        <button
          className="rounded bg-gray-200 px-3 py-1 text-xs hover:bg-gray-300"
          onClick={(): void =>
            setCurrentYear((prev: number): number => prev - 1)
          }
        >
          ←
        </button>
        <h1 className="tex-xl">{currentYear}</h1>
        <button
          className="rounded bg-gray-200 px-3 py-1 text-xs hover:bg-gray-300"
          onClick={() => setCurrentYear((prev: number) => prev + 1)}
        >
          →
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <span>{daysLeft} days left</span>
      </div>
    </footer>
  )
}
