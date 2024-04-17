import { Header } from '@/components/header'
import { AttendeesList } from './components/attendees-list'

export default function Home() {
  return (
    <div className="flex flex-col gap-2 max-w-[1216px] mx-auto py-5">
      <Header />
      <AttendeesList />
    </div>
  )
}
