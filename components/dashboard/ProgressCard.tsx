import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface ProgressCardProps {
  title: string
  current: number
  total: number
  label?: string
}

export function ProgressCard({ title, current, total, label }: ProgressCardProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {label || `${current} sur ${total} complétés`}
            </span>
            <span className="font-semibold text-primary">{percentage}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>
      </CardContent>
    </Card>
  )
}
