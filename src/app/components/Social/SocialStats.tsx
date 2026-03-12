type Props = {
  stats: string
  gradient: string
}

export default function SocialStats({ stats, gradient }: Props) {
  return (
    <div
      className={`px-3 py-1 rounded-full bg-linear-to-r ${gradient} text-white text-xs font-semibold mb-4`}
    >
      {stats}
    </div>
  )
}