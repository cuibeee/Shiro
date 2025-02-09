import type { NoteWrappedPayload } from '@mx-space/api-client'

import { apiClient } from '~/lib/request'

import Redirect from './redirect'

export const revalidate = 60

export default async function Page() {
  const data = await fetch(apiClient.note.proxy.latest.toString(true), {
    next: {
      revalidate: 30,
    },
  }).then((res) => res.json() as Promise<NoteWrappedPayload>)

  return <Redirect nid={data.data.nid} />
}
