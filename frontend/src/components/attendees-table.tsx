'use client'

import { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IconButton } from '@/components/icon-button'
import { api } from '@/lib/api'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface IAttendeesProps {
  id: number
  name: string
  email: string
  created_at: string
  check_in_at: string | null
}

interface IAttendeesTable {
  search: string
}

export const AttendeesTable = ({ search }: IAttendeesTable) => {
  const [attendees, setAttendees] = useState<IAttendeesProps[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }
    return 1
  })
  const total_pages = Math.ceil(total / 10)

  const setCurrentPage = (page: number) => {
    const url = new URL(window.location.toString())
    url.searchParams.set('page', String(page))
    window.history.pushState({}, '', url)
    setPage(page)
  }

  const goBack = () => {
    setCurrentPage(page - 1)
  }

  const goNext = () => {
    setCurrentPage(page + 1)
  }

  const goToFirstPage = () => {
    setCurrentPage(1)
  }
  const goToLastPage = () => {
    setCurrentPage(total_pages)
  }

  const loadAttendees = useCallback(async () => {
    const url = new URL(
      'http://localhost:3333/events/clv21xmnd000014ijykhwdyvp/attendees',
    )
    url.searchParams.set('page_index', String(page - 1))

    if (search.length > 0) {
      url.searchParams.set('query', search)
    }

    const { data } = await api.get(String(url))
    setAttendees(data.attendees)
    setTotal(data.total)
  }, [page, search])

  useEffect(() => {
    loadAttendees()
  }, [loadAttendees])

  return (
    <Table className="border border-white/10">
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: 48 }} className="flex items-center">
            <Checkbox />
          </TableHead>
          <TableHead>Código</TableHead>
          <TableHead>Participantes</TableHead>
          <TableHead>Data de inscrição</TableHead>
          <TableHead>Data do check-in</TableHead>
          <TableHead style={{ width: 48 }}></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendees.map((attendee) => {
          return (
            <TableRow key={attendee.id}>
              <TableCell className="flex items-center mt-3">
                <Checkbox />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">
                    {attendee.name}
                  </span>
                  <span className="text-gray-300">{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(attendee.created_at)}</TableCell>
              <TableCell>
                {!attendee.check_in_at && (
                  <span className="text-gray-500">Não fez check in</span>
                )}
                {attendee.check_in_at && dayjs().to(attendee.check_in_at)}
              </TableCell>
              <TableCell>
                <IconButton className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80">
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter className="p-2">
        <TableRow>
          <TableCell colSpan={3} className="text-sm text-gray-300">
            mostrando {attendees.length} de {total} items
          </TableCell>
          <TableCell colSpan={3} className="text-sm text-gray-300 text-right">
            <div className="flex items-center gap-8 justify-end">
              <span>
                Página {page} de {total_pages}
              </span>
              <div className="flex gap-2 items-end">
                <IconButton
                  className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80"
                  onClick={goToFirstPage}
                  disabled={page === 1}
                  title="Voltar para primeira página"
                >
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton
                  className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80"
                  onClick={goBack}
                  disabled={page === 1}
                  title="Voltar para página anterior"
                >
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton
                  className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80"
                  onClick={goNext}
                  disabled={page === total_pages}
                  title="Próxima página"
                >
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton
                  className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80"
                  onClick={goToLastPage}
                  disabled={page === total_pages}
                  title="Ir para última página"
                >
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
