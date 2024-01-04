import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: any) {
  const matchDate = new Date(date)
  const start = new Date( matchDate.getTime() + ( matchDate.getTimezoneOffset() * 60000 ) )
  return `${start.getMonth() + 1}/${start.getDate()}`;
}

export const matchValues = {
  schedule: {
    _id: true,
    _meta: {
      totalCount: true,
    },
    _slug: true,
    _title: true,
    items: {
      _id: true,
      _slug: true,
      _title: true,
      awayTeam: {
        _id: true,
        _slug: true,
        _title: true,
        location: true,
        teamLogo: {
          alt: true,
          aspectRatio: true,
          fileName: true,
          fileSize: true,
          height: true,
          lastModified: true,
          mimeType: true,
          rawUrl: true,
        },
        teamName: true,
      },
      competition: true,
      date: true,
      homeTeam: {
        _id: true,
        _slug: true,
        _title: true,
        location: true,
        teamLogo: {
          alt: true,
          aspectRatio: true,
          fileName: true,
          fileSize: true,
          height: true,
          lastModified: true,
          mimeType: true,
          rawUrl: true,
        },
        teamName: true,
      },
      time: true,
    },
  },
}