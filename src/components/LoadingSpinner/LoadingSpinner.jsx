import { Loader2 } from 'lucide-react'

export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-[50vh]">
            <Loader2 className="animate-spin text-indigo-500" size={48} />
        </div>
    )
}