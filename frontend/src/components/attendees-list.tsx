'use client'

import { ChangeEvent, useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { AttendeesTable } from '@/components/attendees-table'

export const AttendeesList = () => {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? ''
    }
    return ''
  })

  const setCurrentSearch = (search: string) => {
    const url = new URL(window.location.toString())
    url.searchParams.set('search', search)
    window.history.pushState({}, '', url)
    setSearch(search)
  }

  const onSearchInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 border border-white/10 rounded-lg text-sm px-3 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <Input
            placeholder="Buscar participantes"
            className="border-none flex-1 outline-none focus-visible:ring-0"
            value={search}
            onChange={onSearchInputChanged}
          />
        </div>
      </div>

      <AttendeesTable search={search} />
    </div>
  )
}
