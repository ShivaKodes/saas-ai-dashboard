"use client"

import { useProModal } from "@/hooks/useProModal"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

const ProModal = () => {


  const proModal=useProModal()


  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2 px-2">
            Uncle ji mujhe upgrade kar dijiye. Apka limit khtam ho gya hai
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal