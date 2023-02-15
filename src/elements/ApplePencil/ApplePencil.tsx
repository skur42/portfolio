import { Pencil } from "./assets/Pencil";

export const ApplePencil = () => {
  return (
    <div className="relative w-2/3 h-2/3 border bg-orange-50 flex justify-center rounded-2xl overflow-hidden">
      <Pencil className="absolute bottom-10 -mr-80" scale="0.6" />
    </div>
  )
}

export default ApplePencil;