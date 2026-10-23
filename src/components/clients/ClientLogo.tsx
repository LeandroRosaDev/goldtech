import Image from "next/image"

export function ClientLogo({ nome, imagem }: { nome: string; imagem?: string }) {
  return (
    <figure className="group flex w-full flex-col items-center gap-4">
      <figcaption className="flex h-8 w-full items-end justify-center text-quiet transition duration-500 group-hover:text-ink">
        <span className="line-clamp-2 text-center text-[11px] leading-4 tracking-[0.12em] uppercase">{nome}</span>
      </figcaption>
      <span className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-white shadow-[0_12px_32px_-18px_rgba(18,20,23,0.35)] ring-1 ring-ink/5">
        {imagem ? (
          <Image
            src={imagem}
            alt=""
            fill
            sizes="(max-width: 767px) 150px, 220px"
            className="object-cover"
          />
        ) : (
          <span className="grid size-full place-items-center text-sm text-quiet">{nome.slice(0, 1)}</span>
        )}
      </span>
    </figure>
  )
}
