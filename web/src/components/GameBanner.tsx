interface GameBannerProps {
  bannerUrl: string
  title: string
  adsCount: number
  alt: string
}

export function GameBanner({ bannerUrl, title, adsCount, alt }: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={alt} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">
          {title}
        </strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}
