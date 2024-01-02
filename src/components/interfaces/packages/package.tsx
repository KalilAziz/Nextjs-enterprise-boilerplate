import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { PackageProp } from '@/config/packages'

export const Package = (pkg: PackageProp) => {
  return (
    <Card className="flex flex-col">
      <CardContent>
        <div className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-xl bg-primary">
          <pkg.icon className="h-12 w-12" />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{pkg.title}</CardTitle>
        <CardDescription className="line-clamp-3">{pkg.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex flex-wrap gap-3">
        {pkg.referrer.map((link) => (
          <Button key={link.url} className="w-full" asChild>
            <Link className="flex-1" href={link.url}>
              {link.name}
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
