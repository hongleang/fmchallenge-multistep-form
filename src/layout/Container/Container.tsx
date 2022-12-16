type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {

  return (
    <div className="container-lg">
      {children}
    </div>
  )
}
