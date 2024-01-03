/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/sIG9orYGC8D
 */
import { basehub } from "basehub"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

const getMatches = async () => {
  // query variables
  return await basehub({ next: { revalidate: 30 }}).query({
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
  })
};

const formatDate = (date: any) => {
  const matchDate = new Date(date)
  const start = new Date( matchDate.getTime() + ( matchDate.getTimezoneOffset() * 60000 ) )
  return `${start.getMonth() + 1}/${start.getDate()}`;
}

export async function Schedule() {
  const matchData = await getMatches()

  const matches = matchData.schedule.items

  return (
    <main key="1" className="container mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold">Inter Miami CF Season Schedule</h1>
        <Button className="md:w-auto bg-[#F5B6CD] text-black" variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          Add All Matches
        </Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-[#F5B6CD] text-black" variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter Matches
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-black">
            <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup defaultValue="all">
              <DropdownMenuRadioItem value="competition">Friendly&apos;s</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="competition">Regular Season</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="competition">Leagues Cup</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="competition">MLS Playoffs</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="home">Home Games</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="away">Away Games</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      {/* Matches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
        <div key={match._title}>
          {console.log({match})}
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <img
                  alt="Inter Miami CF Logo"
                  className="mr-2 w-8 h-8"
                  height="50"
                  src={match.homeTeam.teamLogo.rawUrl}
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <Badge className="mr-2 bg-[#F5B6CD] text-black">
                  {match.homeTeam._title === "InterMiamiCF" ? 'Home' : 'Away'}
                </Badge>
                <h2 className="text-lg md:text-xl">{`${match.homeTeam.teamName} vs. ${match.awayTeam.teamName}`}</h2>
                <img
                  alt="Team B Logo"
                  className="ml-2 w-8 h-8"
                  height="50"
                  src={match.awayTeam.teamLogo.rawUrl}
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
              </div>
              <p className="text-gray-400">{`${formatDate(match.date)} ${match.time}`}</p>
              <p className="text-gray-400 pt-1">{match.homeTeam.location}</p>
              <p className="text-gray-400">{match.competition}</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-2 bg-[#F5B6CD] text-black" variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
              <div className="flex justify-between">
                <Button className="w-1/2 mr-2 bg-gray-500 text-white" variant="outline">
                  <TicketIcon className="mr-2 h-4 w-4" />
                  Buy Tickets
                </Button>
                <Button className="w-1/2 bg-gray-500 text-white" variant="outline">
                  Learn Chants
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        ))}
        {/*<div>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <img
                  alt="Inter Miami CF Logo"
                  className="mr-2 w-8 h-8 rounded-full"
                  height="50"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
                <Badge className="mr-2 bg-[#F5B6CD] text-black">Away</Badge>
                <h2 className="text-lg md:text-xl">Inter Miami CF vs Team D</h2>
                <img
                  alt="Team D Logo"
                  className="ml-2 w-8 h-8 rounded-full"
                  height="50"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width="50"
                />
              </div>
              <p className="text-gray-600">Jan 17, 2024 - 1:00 PM</p>
              <p className="text-gray-600 pt-1">Location: DRV PNK Stadium</p>
              <p className="text-gray-600">Competition: West</p>
            </CardHeader>
            <CardContent>
              <Button className="w-full mb-2 bg-[#F5B6CD] text-black" variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
              <Button className="w-full bg-gray-500 text-white" variant="outline">
                <TicketIcon className="mr-2 h-4 w-4" />
                Buy Tickets
              </Button>
            </CardContent>
          </Card>
        </div>*/}
      </div>
    </main>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function TicketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}
