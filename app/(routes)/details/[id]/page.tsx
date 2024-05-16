interface Props {
  params: {
    id: string;
  }
}


function Page({params}: Props) {
  return (
    <div>
      Id: {params.id || "Sem id"}
    </div>
  )
}

export default Page
